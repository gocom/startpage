<template>
    <section class="clock">
        <div class="clock__date">
            <span class="clock__date-component clock__date-component--weekday">{{ format('dddd') }}</span>
            <span class="clock__date-component clock__date-component--day">{{ format('MMMM Do, YYYY') }}</span>
        </div>
        <div class="clock__time">
            <span class="clock__time-component clock__time-component--hours">{{hours}}</span>
            <span class="clock__time-component clock__time-component--separator">:</span>
            <span class="clock__time-component clock__time-component--minutes">{{minutes}}</span>
            <span class="clock__time-component clock__time-component--am-pm">{{amPm}}</span>
        </div>
    </section>
</template>

<style lang="less" src="./styles.less"></style>
<script src="./main.js"></script>
