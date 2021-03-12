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
  <section class="sites">
    <div class="sites__content">
      <Draggable
        class="site-grid"
        v-model="items"
        group="sites"
        v-bind:move="isDraggingAllowed">
        <Site
          v-for="(site, index) in items"
          v-bind:key="site.id"
          v-bind:site="site"
          v-bind:position="getPosition(index)"
          v-on:delete="reload"
          v-on:edit="setEdit"
        />
      </Draggable>

      <Draggable
        class="site-grid site-grid--sidecar site-grid--prev"
        v-model="prevPage"
        group="sites"
        v-bind:move="isDraggingAllowed">
      </Draggable>

      <Draggable
        class="site-grid site-grid--sidecar site-grid--next"
        v-model="nextPage"
        group="sites"
        v-bind:move="isDraggingAllowed">
      </Draggable>
    </div>

    <Pagination v-bind:total="totalCount" v-bind:limit="limit"/>

    <div class="sites__actions">
      <ConfigEditForm/>

      <SiteEditForm
        v-bind:edit="edit"
        v-on:save="save"
        v-on:cancel="cancel"
      />
    </div>
  </section>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
