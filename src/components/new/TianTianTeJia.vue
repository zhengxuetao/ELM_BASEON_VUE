<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="8" offset="8">
                <img style="height:20px;" src="static/img/38.png" alt="" />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <router-link to="/order">
                    <div style="position: relative;">
                        <img src="static/img/35.png" alt=""/>
                        <div class="dazhe">
                            3.8折
                        </div>
                    </div>
                </router-link>
                <span style="color:red;">￥76</span>
                <span style="text-decoration: line-through">￥76</span>
            </el-col>
            <el-col :span="8">
                <router-link to="/order">
                    <div style="position: relative;">
                        <img src="static/img/36.png" alt=""/>
                        <div class="dazhe">
                            3.8折
                        </div>
                    </div>
                </router-link>
                <span style="color:red;">￥76</span>
                <span style="text-decoration: line-through">￥76</span>
            </el-col>
            <el-col :span="8">
                <router-link to="/order">
                    <div style="position: relative;">
                        <img src="static/img/37.png" alt=""/>
                        <div class="dazhe">
                            3.8折
                        </div>
                    </div>
                </router-link>
                <span style="color:red;">￥76</span>
                <span style="text-decoration: line-through">￥76</span>
            </el-col>
        </el-row>
        <router-link to="/order">
            更多
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'TianTianTeJia',
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .content {
        /* height: 50px; */
        width: 100%;
    }
    img {
        width: 100px;
        height: 100px;
    }
    .dazhe {
        position: absolute;
        left: 6px;
        top: 3px;
        font-size: 4px;
        color: red;
    }
</style>
