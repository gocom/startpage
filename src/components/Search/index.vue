<!--
 * Start Page - New tab speed dial.
 *
 * {@link https://github.com/gocom/startpage GitHub}
-->

<!--
 * Copyright (C) 2023 Jukka Svahn
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
      <label class="search__label" v-bind:for="uid">{{ $t('search.label') }}</label>
      <input name="q"
             type="search"
             v-bind:id="uid"
             v-model="query"
             v-bind:placeholder="$t('search.placeholder', {provider: providerName})"
             v-bind:class="{ search__input: true, 'search__input--active': isActive }"
             v-on:input="search"
             v-on:focus="focus"
             v-on:blur="blur"
             ref="searchInput"/>
      <button
        class="search__button search__button--reset"
        type="reset">{{ $t('search.reset') }}</button>
      <button
        class="search__button search__button--submit"
        type="submit">{{ $t('search.button') }}</button>
      <aside v-if="isSuggestionsOpen" class="search__suggestions">
        <DropdownMenu v-bind:exits="true" v-on:exit="focusToField">
          <template slot="items">
            <DropdownItem
              v-for="(item, index) in items"
              v-bind:key="index"
              v-bind:url="item.url"
              v-bind:label="item.name"
              v-bind:description="item.url"
            />
          </template>
        </DropdownMenu>
      </aside>
    </form>

    <KeyboardShortcut
      shortcut="Escape"
      v-on:down="closeField"
      v-if="isActive"
      v-bind:force="true"/>

    <KeyboardShortcut
      shortcut="Cmd+F"
      v-on:down="focusToField"/>
  </section>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
