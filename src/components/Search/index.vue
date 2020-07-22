<template>
    <section class="search">
        <form class="search__form" v-on:submit.prevent="submit">
            <label for="search__query">Search</label>
            <input name="query" type="search" id="search__query" v-model="query" v-bind:placeholder="placeholder" @change="search" @focus="focus" @blur="blur"/>
            <button type="reset">Reset</button>
            <button type="submit">Search</button>
        </form>

        <aside class="search__suggestions">
            <article v-for="item in items" class="search-item">
                <h1 class="search-item__id">{{ item.id }}</h1>
            </article>
        </aside>
    </section>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
