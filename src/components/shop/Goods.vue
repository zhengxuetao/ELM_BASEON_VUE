<template>
    <div class="content">
        <el-row>
            <el-col :span="6">
                <div class="scroll unActive">
                    <div class="classify" v-for="item in goods" :class="{active: item.classifyId == activeId}" @click="menuClick(item.classifyId)">
                        {{item.classifyName}}
                    </div>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="scroll" ref="list">
                    <div :id="item.classifyId" v-for="item in goods" ref="goods">
                        <div class="goods_bar">
                            {{item.classifyName}}
                        </div>
                        <div v-for="goods in item.goods">
                            <el-row>
                                <el-col :span="6">
                                    <img style="height:50px;padding-top:10px;" :src="goods.img" alt="" />
                                </el-col>
                                <el-col :span="18">
                                    <p>{{goods.name}}</p>
                                    <p>￥{{goods.price}}</p>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        name: 'Goods',
        data() {
            return {
                goods: [],
                activeId: 1,
                scrollY: []
            }
        },
        created() {
            axios.get('static/data/shop.json').then((res) => {
                this.goods = res.data[0]['goods'];
                this.$nextTick(function() {
                    let foodList = this.$refs.goods;
                    let min = 0, max = 0;
                    for (let i = 0; i < foodList.length; i++) {
                        max += foodList[i].clientHeight;
                        this.scrollY.push({
                            id: foodList[i].id,
                            yValue: min,
                            min: min,
                            max: max
                        });
                        min += foodList[i].clientHeight;
                    }
                })
            });
        },
        methods: {
            menu(a,b,c) {
                let scroll = this.$refs.list.scrollTop;
                for (let i = 0; i < this.scrollY.length; i++) {
                    if (scroll >= this.scrollY[i].min && scroll < this.scrollY[i].max) {
                        this.activeId = this.scrollY[i].id;
                        break;
                    }
                }
            },
            menuClick(id) {
                this.activeId = id;
                let height = 0;
                for (let i = 0; i < this.scrollY.length; i++) {
                    if (this.activeId == this.scrollY[i].id) {
                        height = this.scrollY[i].yValue;
                        break;
                    }
                }
                this.$refs.list.scrollTo(0, height);
            }
        },
        mounted() {
            this.$refs.list.addEventListener('scroll', this.menu);
        },
    }
</script>

<style scoped>
     ::-webkit-scrollbar {
        display: none
    }
    .content {
        background-color: #ffffff;
    }
    .scroll {
        overflow-y: scroll;
        height: 350px;
        overflow-x: hidden;
    }
    .active {
        background-color: #ffffff;
    }
    .unActive {
        background-color: #bbbbbb;
    }
    .classify {
        padding-top: 20px;
        height: 40px;
    }
    .goods_bar {
        background-color: #999999;
        height: 25px;
        padding-top: 5px;
    }
</style>

