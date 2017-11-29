<template>
    <div id="aa" class="content">
        <img src="static/img/11.jpg" alt="" />
    </div>
</template>

<script>
    export default {
        name: 'Ads',
        data() {
            return {
                ads_url: ''
            }
        },
        mounted() {
            this.ads_url = require('../../../static/img/ads.png');
        }
    }
</script>

<style scoped>
    .content {
        height: 30px;
        width: 100%;
    }
</style>
