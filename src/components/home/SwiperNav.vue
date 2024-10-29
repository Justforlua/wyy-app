<template>
    <div id="swiperTop">
        <van-swipe :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in state.images" :key="image">
              <img :src="image.pic" />
            </van-swipe-item>
          </van-swipe>
    </div>
    
</template>
<script>
import axios from 'axios';
import { onMounted } from 'vue';// 引入生命周期函数
import {reactive} from 'vue';
import {getBanner} from '@/request/api/home.js'
    export default {
    setup() {
        const state = reactive({//响应式的图片
            images:[
            'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
            'https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg',
        ]});
        onMounted(async ()=>{
            // axios.get('http://localhost:3000/banner?type=2').then((res)=>{
            //     console.log(res)
            //     state.images=res.data.banners
            //     console.log(state.images)
            // })
            let res=await getBanner()
            state.images=res.data.banners
        })
        return { state };
    },
    };
</script>
<style lang="less">
    #swiperTop{
        .van-swipe {
            width:100%;
            height:3rem;
            .van-swipe-item{
                padding:0 0.2rem;
                img{
                    width:100%;
                    height: 100%;
                    border-radius: 0.2rem;
                }
            }
        }
        .van-swipe__indicator--active{
            background-color: rgb(219,130,130);
        }
    }
    
</style>