<template>
    <div class="content">
        <ShopHeader :shop="shop"/>
        <el-row :gutter="20">
            <el-col :span="8">
                <router-link to="/shop/goods">商品</router-link>
            </el-col>
            <el-col :span="8">
                <router-link to="/shop/discuss">评价</router-link>
            </el-col>
            <el-col :span="8">
                <router-link to="/shop/detail">商家</router-link>
            </el-col>
            <router-view style="margin-top:30px;"/>
        </el-row>
    </div>
</template>

<script>
    import axios from 'axios'
    import ShopHeader from '@/components/shop/ShopHeader'
    export default {
        name: 'Shop',
        data() {
            return {
                shop: {}
            }
        },
        components: {
            ShopHeader
        },
        created() {
            axios.get('static/data/shop.json').then((res) => {
                this.shop = res.data[0];
            });
        }
    }
</script>

<style scoped>
</style>
