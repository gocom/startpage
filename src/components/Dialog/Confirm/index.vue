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
  <section class="dialog dialog--confirm">
    <div class="dialog__overlay">
      <form class="dialog__window">
        <div class="dialog__content">
          <h1 class="dialog__title" v-if="title">{{ title }}</h1>
          <p class="dialog__message" v-if="message">{{ message }}</p>
        </div>
        <div class="dialog__actions" ref="actions">
          <slot name="actions">
            <button
              type="submit"
              v-autofocus
              v-on:click.prevent="confirm">
              {{ confirmButtonLabel || $t('confirm.yes') }}
            </button>
            <button
              type="reset"
              v-on:click.prevent="decline">
              {{ declineButtonLabel || $t('confirm.no') }}
            </button>
          </slot>
        </div>
      </form>
    </div>

    <KeyboardShortcut shortcut="Escape" v-on:down="decline"/>
  </section>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
