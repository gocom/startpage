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
  <div class="form-color-picker">
    <div class="form-color-picker__input">
      <input
        class="form-color-picker__color-input"
        v-bind:id="id"
        v-bind:name="name"
        type="color"
        v-model="value"
        v-bind:placeholder="color"
        @change="change"
        @input="change"
      />
      <label v-bind:for="id">
        <span class="form-color-picker__color">
          <span
            class="form-color-picker__preview"
            v-bind:style="{backgroundColor: cssColor}"></span>
          <span class="form-color-picker__code">{{cssColor}}</span>
        </span>
      </label>
    </div>
  </div>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
