<template>
    <div class="content">
        <el-carousel height="150px">
            <el-carousel-item>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/1.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/2.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/3.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/4.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/5.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/6.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/7.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/8.png" alt="" />
                        </router-link>
                    </el-col>
                </el-row>
            </el-carousel-item>
            <el-carousel-item>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/1.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/2.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/3.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/4.png" alt="" />
                        </router-link>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/5.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/6.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/7.png" alt="" />
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <router-link to="/order">
                            <img src="static/img/8.png" alt="" />
                        </router-link>
                    </el-col>
                </el-row>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: 'Classify',
        data() {
            return {}
        }
    }
</script>

<style scoped>
    .el-row {
        height: 75px;
    }
    .content {
        /* height: 50px; */
        width: 100%;
    }
    img {
        width: 60px;
        height: 60px;
    }
</style>
