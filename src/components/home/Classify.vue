<template>
    <div class="content">
        <el-carousel height="150px">
            <el-carousel-item v-for="page in totalPage" :key="page">
                <el-row :gutter="20">
                    <el-col :span="6" v-for="(item, index) in data" :key="item.name"
                     v-if="index >= (page - 1) * pageSize && index < page * pageSize ">
                        <router-link :to="{name: 'ShopList', query:{searchKey:item.name}}">
                            <img :src="item.img" alt="" />
                        </router-link>
                        <p style="margin:0 0;">{{item.name}}</p>
                    </el-col>
                </el-row>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: 'Classify',
        data() {
            return {
                data: [],
                totalPage: 1,
                pageSize: 8
            }
        },
        mounted() {
            axios.get('static/data/classify.json').then((res) => {
                this.data = res.data;
                this.totalPage = this.data.length / this.pageSize;
                if(this.data.length % this.pageSize !== 0) {
                    this.totalPage += 1;
                }
            });
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
        width: 50px;
        height: 50px;
    }
</style>
