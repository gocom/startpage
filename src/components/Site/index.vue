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
  <article class="site">
    <a
      class="site__link"
      rel="external noreferrer noopener"
      v-bind:aria-label="site.name"
      v-bind:href="sanitizedUrl"
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
          v-bind:alt="site.name"
          />
        <img
          class="site__icon"
          v-if="site.icon"
          v-bind:src="site.icon"
          v-bind:alt="site.name"
          />
        <i v-if="site.fa" v-bind:class="site.fa"></i>
      </div>
    </a>

    <div class="site__details">
      <aside aria-hidden="true">
        <h1 class="site__info site__info--title">
          <a rel="external noreferrer noopener" tabindex="-1" v-bind:href="sanitizedUrl">
            {{ site.name }}
          </a>
        </h1>

        <h2 class="site__info site__info--domain">
          <a rel="external noreferrer noopener" tabindex="-1" v-bind:href="sanitizedUrl">
            {{ site.hostname }}
          </a>
        </h2>
      </aside>

      <div class="site__actions">
        <SiteSearchToggle v-bind:site="site"/>
        <DropdownMenu v-if="isEditable" v-bind:label="'Options for ' + site.name">
          <template slot="items">
            <DropdownItem label="Edit" v-on:select="edit"/>
            <DropdownItem label="Delete" v-on:select="confirmDelete"/>
          </template>
        </DropdownMenu>
      </div>
    </div>

    <PositionIndicator v-bind:position="position" v-bind:label="site.name" v-on:open="open"/>

    <Confirm
      v-if="isConfirmingDelete"
      v-bind:title="'Delete ' + site.name + '?'"
      message="Are you sure you want to permanently delete the site?"
      v-on:decline="declineDelete"
      v-on:confirm="remove"
      />
  </article>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
