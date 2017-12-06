<template>
    <div class="content">
        <div>
            <img class="bg" :src="shop.logo" alt="" />
        </div>
        <el-row :gutter="20">
            <el-col :span="8">
                <img :src="shop.logo" alt="" />
            </el-col>
            <el-col :span="16">
                <el-row>
                    <el-col :span="24">
                        <div style="float:left;font-size:20px;">
                            {{shop.name}}
                        </div>
                    </el-col>
                </el-row>
                <el-row style="font-size:16px;float:left;padding-top:3px;">
                    <el-col :span="24">
                        公告： 欢迎光临真功夫
                    </el-col>
                </el-row>
                <el-row style="font-size:16px;float:left;padding-top:3px;">
                    <el-col :span="24">
                        商家配送 · 约45分钟
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-collapse>
                    <el-collapse-item>
                        <template slot="title">
                            <el-row>
                                <el-col :span="12">
                                    <div>满10减5,满20减5</div>
                                </el-col>
                                <el-col :span="8"  style="font-size:4px;">
                                    8个活动
                                </el-col>
                            </el-row>
                        </template>
                        <div>1、满10减5</div>
                        <div>2、满20减5</div>
                        <div>3、满30减5</div>
                        <div>4、满40减5</div>
                        <div>5、满50减5</div>
                    </el-collapse-item>
                </el-collapse>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: "ShopHeader",
        props: {
            shop: {
                type: Object
            }
        },
        created() {
            this.iconClassMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
        },
        data() {
            return {
                detailShow: false
            }
        },
        methods: {
            showDetails() {
                this.detailShow = true;
            },
            hideDetail() {
                this.detailShow = false;
            }
        }
    }
</script>

<style scoped>
    .content {
    }
    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        filter: blur(100px);
        z-index: -1;
    }
</style>
