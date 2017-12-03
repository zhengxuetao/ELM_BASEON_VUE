<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="5">
                <img style="height:40px;" src="static/img/32.png" alt="" />
            </el-col>
            <el-col :span="19">
                <el-row>
                    <el-col :span="12">麦当劳(广州店)</el-col>
                    <el-col :span="12" style="font-size:8px;">订单已经完成</el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <div style="font-size:12px;padding-top:5px;padding-left:10px;float:left;">
                            全家桶组合+北京烤鸭
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <div style="color:red;font-size:12px;padding-top:5px;padding-left:10px;float:left;">
                            ￥108
                        </div>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="8" :offset="10">
                        <router-link to="/">
                            <el-button size="mini" plain>再来一单</el-button>
                        </router-link>
                    </el-col>
                    <el-col :span="6">
                        <el-button size="mini" plain>评价</el-button>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" style="background-color:#ccc;height:2px;margin-top:10px;">
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'Order',
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
</style>
