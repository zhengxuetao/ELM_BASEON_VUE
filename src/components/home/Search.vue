<<template>
    <el-autocomplete style="width:100%;" popper-class="my-autocomplete" v-model="searchKey" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect">
        <i class="el-icon-search el-input__icon" slot="suffix" @click="handleIconClick"></i>
        <template slot-scope="props">
                <div class="name">{{ props.item.value }}</div>
        </template>
    </el-autocomplete>
</template>



<style>

</style>

<script>
    import axios from 'axios'
    export default {
        name: 'Search',
        data() {
            return {
                searchKey: ''
            };
        },
        props: ['routerName'],
        methods: {
            querySearch(queryString, cb) {
                //输入框输入时进行联想输入。
                axios.get('static/data/shopList.json').then((res) => {
                    var shopList = res.data;
                    var results = queryString ? shopList.filter(this.createFilter(queryString)) : shopList;
                    // 调用 callback 返回建议列表的数据
                    cb(results);
                });
            },
            createFilter(queryString) {
                //过滤方法
                return (restaurant) => {
                    return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                };
            },
            handleSelect(item) {
                //选择联想框的内容后调用
                this.$router.push({
                    name: this.routerName,
                    query: {
                        searchKey: this.searchKey
                    }
                });
            },
            handleIconClick(item) {
                //点击查询图标事件
                this.$router.push({
                    name: this.routerName,
                    query: {
                        searchKey: this.searchKey
                    }
                });
            }
        },
        // mounted() {
        //     this.shopList = this.findShopList();
        // }
    }
</script>