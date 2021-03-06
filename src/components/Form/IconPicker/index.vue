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
  <div class="form-icon-picker">
    <div class="form-icon-picker__selected">
      <div class="form-icon-picker__icon form-icon-picker__icon--preview" v-if="selected">
        <i v-bind:class="selected"></i>
      </div>
      <button type="button" v-on:click.prevent="remove" v-if="selected">
        <i class="fas fa-trash-alt"></i>
      </button>
      <button type="button" v-on:click.prevent="close" v-if="isOpen">
        <i class="fas fa-chevron-up"></i>
      </button>
      <button type="button" v-on:click.prevent="open" v-else>
        <i class="fas fa-edit"></i>
      </button>
    </div>
    <div class="form-icon-picker__list" v-bind:class="{ 'form-icon-picker__list--open': isOpen }">
      <button
        type="button"
        class="form-icon-picker__icon"
        v-for="(icon, index) in icons"
        v-bind:key="index"
        v-on:click.prevent="select(icon)"
        v-bind:title="icon.name"
        v-bind:class="{ 'form-icon-picker__icon--active': isSelected(icon) }">
        <i v-bind:class="icon.icon"></i>
      </button>
    </div>
  </div>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
