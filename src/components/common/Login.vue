<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input type="password" v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>注册</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    name: '',
                    password: ''
                }
            }
        },
        created() {
        },
        methods: {
            onSubmit() {
                axios.get('static/data/login.json').then((res) => {
                    this.$store.commit('updateToken',res.data.token);
                    this.$router.push(this.$route.query.redirectTo);
                });
            }
        }
    }
</script>
