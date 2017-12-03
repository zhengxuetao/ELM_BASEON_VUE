<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="6">
                <router-link to="/">首页</router-link>
            </el-col>
            <el-col :span="6">
                <router-link to="/new">发现</router-link>
            </el-col>
            <el-col :span="6">
                <router-link to="/order">订单</router-link>
            </el-col>
            <el-col :span="6">
                <router-link to="/my">我的</router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {}
        }
    };
</script>

<style scoped>

</style>
