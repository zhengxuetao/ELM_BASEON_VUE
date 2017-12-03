<template>
    <div class="content">
        <el-row>
            <el-col :span="24">
                <div style="float:left;">
                    商家推荐
                </div>
            </el-col>
        </el-row>
        <router-link :to="{name: 'Shop', query:{searchKey:'better'}}">
            <el-row :gutter="20">
                <el-col :span="8">
                    <img src="static/img/21.png" alt="" />
                </el-col>
                <el-col :span="16">
                    <el-row>
                        <el-col :span="24">
                            <div style="float:left;">
                                遇紫包饭
                            </div>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="11">
                            <div>
                                <el-rate v-model="value5" disabled show-score text-color="#ff9900" score-template="{value}">
                                </el-rate>
                            </div>
                        </el-col>
                        <el-col :span="7">
                            <div style="font-size:4px;">
                                量333单
                            </div>
                        </el-col>
                        <el-col :span="6">
                            <img style="width:70px;" src="static/img/22.png" alt="" />
                        </el-col>
                    </el-row>
                    <el-row style="font-size:4px;">
                        <el-col :span="13">
                            ￥20起送|配送费￥6
                        </el-col>
                        <el-col :span="11">
                            3.4KM|41分钟
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
                </el-col>
            </el-row>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: 'Seller',
        data() {
            return {
                value5: 3.7
            }
        }
    }
</script>

<style>
    .el-icon-star-on {
        font-size: 4px;
        margin-right: 0px;
    }
</style>
