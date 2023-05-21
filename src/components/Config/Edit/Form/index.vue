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
      title="New Tab Configuration"
      aria-label="New Tab Configuration"
      aria-haspopup="true"
      v-bind:aria-current="isOpen"
      v-on:click="toggle"
      v-bind:class="{
        'config-edit-form__open-button': true,
        'config-edit-form__open-button--active': isOpen,
      }">
      <i class="fas fa-cog"></i>
    </button>

    <Modal v-if="isOpen" position="right">
      <form
        class="config-edit-form__modal"
        v-on:submit.prevent="save">

        <div class="config-edit-form__control">
          <div class="config-edit-form__label">
            <label v-bind:for="getUid('backgroundColor')">Background</label>
            <div class="config-edit-form__input">
              <ColorPicker
                v-bind:id="getUid('backgroundColor')"
                v-bind:color="backgroundColor"
                v-on:pick="setBackgroundColor"
              />
            </div>
          </div>
        </div>

        <div class="config-edit-form__control">
          <div class="config-edit-form__label">
            <label v-bind:for="getUid('backgroundImage')">Background Image</label>
          </div>
          <div class="config-edit-form__input">
            <FilePicker
              v-bind:id="getUid('backgroundImage')"
              v-bind:current="backgroundImage"
              v-on:pick="setBackgroundImage"
            />
          </div>
        </div>

        <div class="config-edit-form__control">
          <div class="config-edit-form__label">
            Export Configuration
          </div>
          <div class="config-edit-form__input">
            <button type="button" v-on:click.prevent="exportConfig">Export</button>
          </div>
        </div>

        <div class="config-edit-form__control">
          <div class="config-edit-form__label">
            <label v-bind:for="getUid('importConfiguration')">Import Configuration</label>
          </div>
          <div class="config-edit-form__input">
            <FilePicker
              v-bind:id="getUid('importConfiguration')"
              v-on:pick="importConfig"
            />
          </div>
        </div>

        <div class="config-edit-form__actions">
          <button type="submit">Save</button>
          <button type="reset" v-on:click.prevent="close">Cancel</button>
        </div>

        <KeyboardShortcut shortcut="Escape" v-on:down="close"/>
      </form>
    </Modal>
  </div>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
