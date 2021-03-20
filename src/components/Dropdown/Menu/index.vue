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
  <div class="dropdown">
    <button
      v-if="isOpen && label"
      type="button"
      aria-expanded="true"
      aria-haspopup="true"
      v-bind:aria-label="label"
      v-bind:title="label"
      v-on:click.prevent="close">
      <slot name="label-close">
        <i class="fas fa-ellipsis-h"></i>
      </slot>
    </button>

    <button
      v-else-if="label"
      type="button"
      aria-expanded="false"
      aria-haspopup="true"
      v-bind:aria-label="label"
      v-bind:title="label"
      v-on:click.prevent="open">
      <slot name="label-open">
        <i class="fas fa-ellipsis-h"></i>
      </slot>
    </button>

    <ul
      ref="menu"
      v-if="isOpen"
      role="menu"
      tabindex="-1"
      class="dropdown__menu"
      v-bind:aria-label="label"
      v-bind:class=" { 'dropdown__menu--open': isOpen } "
      v-on:click="close"
      v-on:mouseleave="close">
      <slot name="items"/>
    </ul>

    <KeyboardShortcut
      shortcut="Escape"
      v-on:down="close"
      v-if="isOpen"
      v-bind:force="true"/>

    <KeyboardShortcut
      shortcut="ArrowUp"
      v-on:down="prevItem"
      v-if="isOpen"
      v-bind:force="true"/>

    <KeyboardShortcut
      shortcut="ArrowDown"
      v-on:down="nextItem"
      v-if="isOpen"
      v-bind:force="true"/>
  </div>
</template>

<script src="./main.js"></script>
<style lang="less" src="./styles.less"></style>
