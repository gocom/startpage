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
  <li class="dropdown-item" role="none">
    <a
      v-if="sanitizedUrl"
      v-bind:href="sanitizedUrl"
      role="menuitem"
      class="dropdown-item__link">
      <span class="dropdown-item__label">
        {{ label }}
      </span>
      <span v-if="description" class="dropdown-item__description">
        {{ description }}
      </span>
    </a>

    <button
      v-else
      v-on:click="select"
      type="button"
      role="menuitem"
      class="dropdown-item__link">
      <span class="dropdown-item__label">
        {{ label }}
      </span>
      <span v-if="description" class="dropdown-item__description">
        {{ description }}
      </span>
    </button>
  </li>
</template>

<script src="./main.js"></script>
<style lang="less" src="./styles.less"></style>
