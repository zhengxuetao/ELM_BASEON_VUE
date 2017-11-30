<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="8">
                <router-link to="/order">
                    <img src="static/img/11.png" alt="" />
                </router-link>
            </el-col>
            <el-col :span="8">
                <router-link to="/order">
                    <img src="static/img/12.png" alt="" />
                </router-link>
            </el-col>
            <el-col :span="8">
                <router-link to="/order">
                    <img src="static/img/13.png" alt="" />
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Better',
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .el-row {
        height: 100px;
    }
    .content {
        /* height: 50px; */
        width: 100%;
    }
    img {
        width: 100px;
        height: 100px;
    }
</style>
