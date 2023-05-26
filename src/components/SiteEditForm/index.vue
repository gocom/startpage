<!--
 * Start Page - New tab speed dial.
 *
 * {@link https://github.com/gocom/startpage GitHub}
-->

<!--
 * Copyright (C) 2023 Jukka Svahn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
-->

<template>
  <div class="site-edit-form">
    <button
      v-if="isOpen"
      type="button"
      v-on:click="confirmCancel"
      aria-label="Close site editor"
      aria-current="true"
      title="Close site editor"
      class="site-edit-form__open-button site-edit-form__open-button--active">
      <i class="fas fa-plus-circle"></i>
    </button>

    <button
      v-else
      type="button"
      v-on:click="open"
      aria-label="Add new site"
      title="Add new site"
      class="site-edit-form__open-button">
      <i class="fas fa-plus-circle"></i>
    </button>

    <Modal v-if="isOpen" position="right">
      <form
        class="site-edit-form__modal"
        v-on:submit.prevent="save">

        <Message
          v-bind:is-error="true"
          v-if="hasError"
          v-on:close="hasError = false"
          v-bind:message="$t('site.error.save', { error })"
        />

        <div class="site-edit-form__preview">
          <Site v-bind:site="site"/>
        </div>

        <div class="site-edit-form__control">
          <div class="site-edit-form__label">
            <label v-bind:for="getUid('url')">URL</label>
          </div>
          <div class="site-edit-form__input">
            <input
              v-bind:id="getUid('url')"
              type="url"
              name="url"
              v-model="site.url"/>
          </div>
        </div>

        <div class="site-edit-form__control">
          <div class="site-edit-form__label">
            <label v-bind:for="getUid('name')">Name</label>
          </div>
          <div class="site-edit-form__input">
            <input
              v-bind:id="getUid('name')"
              type="text"
              name="name"
              v-model="site.name"/>
          </div>
        </div>

        <div class="site-edit-form__group">
          <div class="site-edit-form__control">
            <div class="site-edit-form__label">
              <label v-bind:for="getUid('backgroundColor')">Background</label>
              <div class="site-edit-form__input">
                <ColorPicker
                  v-bind:id="getUid('backgroundColor')"
                  v-bind:color="site.backgroundColor"
                  v-on:pick="setBackgroundColor"
                />
              </div>
            </div>
          </div>

          <div class="site-edit-form__control">
            <div class="site-edit-form__label">
              <label v-bind:for="getUid('textColor')">Icon Color</label>
              <div class="site-edit-form__input">
                <ColorPicker
                  v-bind:id="getUid('textColor')"
                  v-bind:color="site.textColor"
                  v-on:pick="setTextColor"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="site-edit-form__control">
          <div class="site-edit-form__label">
            <label v-bind:for="getUid('thumbnail')">Thumbnail</label>
          </div>
          <div class="site-edit-form__input">
            <FilePicker
              v-bind:id="getUid('thumbnail')"
              v-bind:current="site.thumbnail"
              v-on:pick="setThumbnail"
              v-bind:imageWidth="640"
              accept=".png, .jpg, .jpeg"
            />
          </div>
        </div>

        <div class="site-edit-form__control">
          <div class="site-edit-form__label">
            <label v-bind:for="getUid('icon')">Icon Image</label>
          </div>
          <div class="site-edit-form__input">
            <FilePicker
              v-bind:id="getUid('icon')"
              v-bind:current="site.icon"
              v-on:pick="setIcon"
              v-bind:imageWidth="640"
              accept=".png, .jpg, .jpeg"
            />
          </div>
        </div>

        <div class="site-edit-form__control">
          <div class="site-edit-form__label">
            <label v-bind:for="getUid('glyph')">Icon Glyph</label>
          </div>
          <div class="site-edit-form__input">
            <IconPicker
              v-bind:id="getUid('glyph')"
              v-bind:icon="site.fa"
              v-on:pick="setFa"
            />
          </div>
        </div>

        <div class="site-edit-form__actions">
          <button type="submit">Save</button>
          <button type="reset" v-on:click.prevent="confirmCancel">Cancel</button>
        </div>

        <KeyboardShortcut shortcut="Escape" v-on:down="confirmCancel"/>

        <Confirm
          v-if="isConfirmingCancel"
          v-bind:title="$t('site.edit.cancel.confirm.title')"
          v-bind:message="$t('site.edit.cancel.confirm.message')"
          v-on:decline="declineCancel"
          v-on:confirm="cancel">
          <template v-slot:actions>
            <button
              type="submit"
              v-autofocus
              v-on:click.prevent="save">
              {{ $t('site.edit.cancel.confirm.save') }}
            </button>
            <button
              type="button"
              v-on:click.prevent="cancel">
              {{ $t('site.edit.cancel.confirm.discard') }}
            </button>
            <button
              type="reset"
              v-on:click.prevent="declineCancel">
              {{ $t('site.edit.cancel.confirm.cancel') }}
            </button>
          </template>
        </Confirm>
      </form>
    </Modal>

    <Confirm
      v-if="isConfirmingOpen"
      v-bind:title="$t('site.open.confirm.title')"
      v-bind:message="$t('site.open.confirm.message')"
      v-on:decline="declineOpen"
      v-on:confirm="open">
      <template v-slot:actions>
        <button
          type="submit"
          v-autofocus
          v-on:click.prevent="save">
          {{ $t('site.open.confirm.save') }}
        </button>
        <button
          type="button"
          v-on:click.prevent="open">
          {{ $t('site.open.confirm.discard') }}
        </button>
        <button
          type="reset"
          v-on:click.prevent="declineOpen">
          {{ $t('site.open.confirm.cancel') }}
        </button>
      </template>
    </Confirm>
  </div>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
