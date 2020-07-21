<template>
    <nav class="pagination">
        <ul class="pagination__pages">
            <li v-for="page in pages" class="pagination__page">
                <button class="pagination__link" v-bind:class="{ 'pagination__link--active': page.isActive }" @click="setPage(page.number)">
                    <span class="pagination__page-number">{{ page.number }}</span>
                </button>
            </li>
        </ul>
    </nav>
</template>

<script src="./main.js"></script>
<style lang="less" src="./styles.less"></style>
