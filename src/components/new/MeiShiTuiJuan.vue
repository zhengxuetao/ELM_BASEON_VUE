<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="8" offset="8">
                <img style="height:20px;" src="static/img/31.png" alt="" />
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="8">
                <router-link to="/order">
                    <img src="static/img/32.png" alt="" />
                </router-link>
                <p style="color:red;">￥34</p>
            </el-col>
            <el-col :span="8">
                <router-link to="/order">
                    <img src="static/img/33.png" alt="" />
                </router-link>
                <p style="color:red;">￥55</p>
            </el-col>
            <el-col :span="8">
                <router-link to="/order">
                    <img src="static/img/34.png" alt="" />
                </router-link>
                <p style="color:red;">￥76</p>
            </el-col>
        </el-row>
        <router-link to="/order">
            更多
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'MeiShiTuiJuan',
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
</style>
