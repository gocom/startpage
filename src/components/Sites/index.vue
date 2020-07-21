<template>
    <section class="sites">
        <div class="site-grid">
            <article v-for="site in items" class="site-grid__cell site">
                <a class="site__link" rel="external noreferrer noopener" v-bind:href="site.url" v-bind:itemid="site.id">
                    <div class="site__preview" v-bind:style="{ backgroundColor: site.backgroundColor, color: site.textColor }">
                        <i v-if="site.fa" v-bind:class="site.fa"></i>
                        <img class="site__thumbnail" v-if="site.thumbnail" v-bind:src="site.thumbnail"/>
                        <img class="site__icon" v-if="site.icon" v-bind:src="site.icon"/>
                    </div>
                    <h1 class="site__info site__info--title">{{ site.name }}</h1>
                    <h2 class="site__info site__info--domain">{{ site.url.hostname }}</h2>
                    <div class="site__position" v-if="showNumbers">{{ site.position }}</div>
                </a>
                <div class="site__actions">
                    <button class="site__action site__action--search" @click="setSiteSearch(site)" v-bind:class="{ 'site__action--active': isSiteSearch(site) }">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
            </article>
        </div>

        <Pagination v-bind:total="totalCount" v-bind:limit="limit"/>
    </section>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
