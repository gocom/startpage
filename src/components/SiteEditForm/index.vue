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
  <form class="site-edit-form" @submit="save">
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
          <ColorPicker v-bind:name="backgroundColor" v-bind:id="getUid('backgroundColor')"/>
        </div>
      </div>
    </div>

    <div class="site-edit-form__control">
      <div class="site-edit-form__label">
        <label v-bind:for="getUid('textColor')">Text Color</label>
        <div class="site-edit-form__input">
          <ColorPicker v-bind:name="backgroundColor" v-bind:id="getUid('textColor')"/>
        </div>
      </div>
    </div>

    <div class="site-edit-form__control">
      <div class="site-edit-form__label">
        <label v-bind:for="getUid('thumbnail')">Thumbnail</label>
      </div>
      <div class="site-edit-form__input">
        <FilePicker v-bind:name="thumbnail" v-bind:id="getUid('thumbnail')"/>
      </div>
    </div>

    <div class="site-edit-form__control">
      <div class="site-edit-form__label">
        <label v-bind:for="getUid('icon')">Icon</label>
      </div>
      <div class="site-edit-form__input">
        <FilePicker v-bind:name="thumbnail" v-bind:id="getUid('icon')"/>
      </div>
    </div>

    <div class="site-edit-form__control">
      <div class="site-edit-form__label">
        <label v-bind:for="getUid('fa')">Icon</label>
      </div>
      <div class="site-edit-form__input">
        <IconPicker/>
      </div>
    </div>

    <div class="site-edit-form__control">
      <button type="submit">Save</button>
    </div>
  </form>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
