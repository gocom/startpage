<!--
 * Start Page - New tab speed dial.
 *
 * {@link https://github.com/gocom/startpage GitHub}
-->

<!--
 * Copyright (C) 2021 Jukka Svahn
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
  <div class="config-edit-form">
    <button
      type="button"
      v-on:click="toggle"
      title="Configure"
      v-bind:class="{
        'config-edit-form__open-button': true,
        'config-edit-form__open-button--active': isOpen,
      }">
      <i class="fas fa-cog"></i>
    </button>

    <form
      class="config-edit-form__modal"
      v-on:submit.prevent="save"
      v-if="isOpen">

      <div class="config-edit-form__group">
        <div class="config-edit-form__control">
          <div class="config-edit-form__label">
            <label v-bind:for="getUid('backgroundColor')">Background</label>
            <div class="config-edit-form__input">
              <ColorPicker
                v-bind:id="getUid('backgroundColor')"
                v-on:pick="setBackgroundColor"
              />
            </div>
          </div>
        </div>

        <div class="config-edit-form__control">
          <div class="config-edit-form__label">
            <label v-bind:for="getUid('textColor')">Text</label>
            <div class="config-edit-form__input">
              <ColorPicker
                v-bind:id="getUid('textColor')"
                v-on:pick="setTextColor"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="config-edit-form__control">
        <div class="config-edit-form__label">
          <label v-bind:for="getUid('backgroundImage')">Background Image</label>
        </div>
        <div class="config-edit-form__input">
          <FilePicker
            v-bind:id="getUid('background-image')"
            v-on:pick="setBackgroundImage"
          />
        </div>
      </div>

      <div class="config-edit-form__actions">
        <button type="submit">Save</button>
        <button type="reset" v-on:click.prevent="toggle">Cancel</button>
      </div>

      <KeyboardShortcut shortcut="!<CloseConfigEditForm>Escape" v-on:on="close"/>
    </form>
  </div>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
