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
  <nav class="pagination">
    <ul class="pagination__pages">
      <li v-for="page in pages" v-bind:key="page.number" class="pagination__page">
        <button
          type="button"
          class="pagination__link"
          v-bind:class="{ 'pagination__link--active': page.isActive }"
          v-on:click.prevent="setPage(page.number)">
          <span class="pagination__page-number">{{ page.number }}</span>
        </button>
      </li>
    </ul>

    <KeyboardShortcut shortcut="ArrowLeft" v-on:on="previousPage"/>
    <KeyboardShortcut shortcut="a" v-on:on="previousPage"/>
    <KeyboardShortcut shortcut="ArrowRight" v-on:on="nextPage"/>
    <KeyboardShortcut shortcut="d" v-on:on="nextPage"/>
  </nav>
</template>

<script src="./main.js"></script>
<style lang="less" src="./styles.less"></style>
