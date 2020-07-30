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
  <article class="site">
    <a
      class="site__link"
      rel="external noreferrer noopener"
      v-bind:href="site.url"
      v-bind:itemid="site.id">
      <div
        class="site__preview"
        v-bind:style="{
          backgroundColor: site.backgroundColor,
          color: site.textColor
        }">
        <i v-if="site.fa" v-bind:class="site.fa"></i>
        <img
          class="site__thumbnail"
          v-if="site.thumbnail"
          v-bind:src="site.thumbnail"
          alt=""
          />
        <img
          class="site__icon"
          v-if="site.icon"
          v-bind:src="site.icon"
          alt=""
          />
      </div>

      <h1 class="site__info site__info--title">{{ site.name }}</h1>
      <h2 class="site__info site__info--domain">{{ site.hostname }}</h2>
      <div class="site__position" v-if="isPositionVisible">{{ position }}</div>
    </a>

    <div class="site__actions">
      <button
        type="button"
        class="site__action site__action--search"
        v-on:click.prevent="toggleSearch"
        v-bind:class="{ 'site__action--active': isSiteSearch }">
        <i class="fas fa-search"></i>
      </button>
      <button
        type="button"
        v-if="isEditable"
        class="site__action site__action--options"
        v-on:click.prevent="toggleMenu"
        v-bind:class="{ 'site__action--active': isMenuOpen }">
        <i class="fas fa-ellipsis-h"></i>
      </button>
    </div>

    <ul
      class="site__menu site__menu--open"
      v-if="isMenuOpen"
      v-on:click="closeMenu"
      v-on:focusout="closeMenu"
      v-on:mouseleave="closeMenu">
      <li class="site__menu-item">
        <a
          href="#"
          class="site__menu-item__link"
          v-on:click.prevent="remove"
          v-if="isEditable">Delete</a>
      </li>
    </ul>
  </article>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
