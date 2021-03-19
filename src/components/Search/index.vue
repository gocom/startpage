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
  <section class="search" v-bind:class="{ 'search--active': isActive }">
    <form class="search__form" v-on:submit.prevent="submit" role="search">
      <label v-bind:for="uid">Search</label>
      <input name="q"
             type="search"
             v-bind:id="uid"
             v-model="query"
             v-bind:placeholder="placeholder"
             v-bind:class="{ search__input: true, 'search__input--active': isActive }"
             v-on:input="search"
             v-on:focus="focus"
             v-on:blur="blur"
             ref="searchInput"/>
      <button type="reset">Reset</button>
      <button type="submit">Search</button>
      <aside class="search__suggestions"
             v-bind:class="{ 'search__suggestions--open': isSuggestionsOpen }">
        <SearchSuggestion
          v-for="(item, index) in items"
          v-bind:key="item.id"
          v-bind:id="item.id"
          v-bind:name="item.name"
          v-bind:url="item.absoluteUrl"
          v-bind:isActive="isActiveIndex(index)"/>
      </aside>
    </form>

    <KeyboardShortcut shortcut="Escape" v-on:down="closeField" v-if="isActive" v-bind:force="true"/>
    <KeyboardShortcut shortcut="ArrowUp" v-on:down="prev" v-if="isSuggestionsOpen" v-bind:force="true"/>
    <KeyboardShortcut shortcut="ArrowDown" v-on:down="next" v-if="isSuggestionsOpen" v-bind:force="true"/>
    <KeyboardShortcut shortcut="Enter" v-on:down="open" v-if="isSuggestionFocused" v-bind:force="true"/>
    <KeyboardShortcut shortcut="Cmd+F" v-on:down="focusToField"/>
  </section>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
