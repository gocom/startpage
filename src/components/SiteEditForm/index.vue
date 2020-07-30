<!--
 * Start Page - New tab speed dial.
 *
 * {@link https://github.com/gocom/startpage GitHub}
-->

<!--
 * Copyright (C) 2020 Jukka Svahn
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
      type="button"
      @click="toggle"
      title="Add new site"
      v-bind:class="{
        'site-edit-form__open-button': true,
        'site-edit-form__open-button--active': isOpen,
      }">
      <i class="fas fa-plus-circle"></i>
    </button>

    <form class="site-edit-form__modal" @submit="save" v-if="isOpen">
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
            v-model="url"/>
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
            v-model="name"/>
        </div>
      </div>

      <div class="site-edit-form__control">
        <div class="site-edit-form__label">
          <label v-bind:for="getUid('backgroundColor')">Background Color</label>
          <div class="site-edit-form__input">
            <ColorPicker
              name="background-color"
              v-bind:id="getUid('backgroundColor')"
              v-bind:color="backgroundColor"
            />
          </div>
        </div>
      </div>

      <div class="site-edit-form__control">
        <div class="site-edit-form__label">
          <label v-bind:for="getUid('textColor')">Icon Color</label>
          <div class="site-edit-form__input">
            <ColorPicker
              name="text-color"
              v-bind:id="getUid('textColor')"
              v-bind:color="textColor"
            />
          </div>
        </div>
      </div>

      <div class="site-edit-form__control">
        <div class="site-edit-form__label">
          <label v-bind:for="getUid('thumbnail')">Thumbnail</label>
        </div>
        <div class="site-edit-form__input">
          <FilePicker name="thumbnail" v-bind:id="getUid('thumbnail')"/>
        </div>
      </div>

      <div class="site-edit-form__control">
        <div class="site-edit-form__label">
          <label v-bind:for="getUid('icon')">Icon Image</label>
        </div>
        <div class="site-edit-form__input">
          <FilePicker name="icon" v-bind:id="getUid('icon')"/>
        </div>
      </div>

      <div class="site-edit-form__control">
        <div class="site-edit-form__label">Icon</div>
        <div class="site-edit-form__input">
          <IconPicker name="fa"/>
        </div>
      </div>

      <div class="site-edit-form__control">
        <button type="submit">Save</button>
        <button type="reset" @click="toggle">Close</button>
      </div>
    </form>
  </div>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
