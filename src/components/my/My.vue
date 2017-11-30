<template>
    <div class="content">
        <el-row :gutter="20">
            <el-col :span="5">
                <img style="height:40px;" src="static/img/32.png" alt="" />
            </el-col>
            <el-col :span="19">
                <el-row>
                    <el-col :span="12">
                        <div style="float:left;">
                            用户用户
                        </div>
                    </el-col>
                    <el-col :span="12" class="el-icon-arrow-right"></el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <div style="font-size:12px;padding-top:5px;float:left;">
                            15555555555
                        </div>
                    </el-col>
                </el-row>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24" style="background-color:#ccc;height:1px;margin-top:10px;">
            </el-col>
        </el-row>
        <el-row style="border-bottom: 2px solid #ddd;">
            <el-col :span="8" style="border-right: 2px solid #ddd;">
                <div>10000000元</div>
                <div>钱包</div>
            </el-col>
            <el-col :span="8" style="border-right: 2px solid #ddd;">
                <div>3个</div>
                <div>优惠</div>
            </el-col>
            <el-col :span="8">
                <div>998个</div>
                <div>金币</div>
            </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
            <el-col :span="23">
                <div class="el-icon-location-outline" style="float:left;">
                    收货地址
                </div>
            </el-col>
            <el-col :span="1" class="el-icon-arrow-right"></el-col>
            <el-col :span="23" style="margin-top:10px;">
                <div class="el-icon-tickets" style="float:left;">
                    我的收藏
                </div>
            </el-col>
            <el-col :span="1" class="el-icon-arrow-right"></el-col>
            <el-col :span="23" style="margin-top:10px;">
                <div class="el-icon-star-off" style="float:left;">
                    推荐有奖
                </div>
            </el-col>
            <el-col :span="1" class="el-icon-arrow-right"></el-col>
            <el-col :span="23" style="margin-top:10px;">
                <div class="el-icon-sold-out" style="float:left;">
                    金币商城
                </div>
            </el-col>
            <el-col :span="1" class="el-icon-arrow-right"></el-col>
            <el-col :span="23" style="margin-top:10px;">
                <div class="el-icon-menu" style="float:left;">
                    每日精选
                </div>
            </el-col>
            <el-col :span="1" class="el-icon-arrow-right"></el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'My',
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
        border-radius: 50%;
    }
</style>
