<template>
    <div id="aa" class="content">
        <el-carousel  height="75px">
            <el-carousel-item>
                <img src="static/img/11.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
                <img src="static/img/11.jpg" alt="" />
            </el-carousel-item>
            <el-carousel-item>
                <img src="static/img/11.jpg" alt="" />
            </el-carousel-item>
        </el-carousel>
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
        /* height: 50px; */
        width: 100%;
    }
    img {
        width: 100%;
        height: 75px;
    }
</style>
