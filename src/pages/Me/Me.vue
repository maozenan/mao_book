<template>
<div class="container">
    
    <div class="userinfo">
        <img :src="userInfo.avatarUrl" alt="">
    </div>
     <button class="getuserinfo" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin" plain="true">
        {{userInfo.nickName}}
    </button>
    <yaerProgress></yaerProgress>
    <button class="btn" @click='scanBook' v-if="userInfo.openId">添加图书</button>
    
  </div>
</template>
<script>
import {showSuccess,post,showModal} from '../../utils/index.js'
import qcloud from 'wafer2-client-sdk'
import config from '../../config.js'
import yaerProgress from '@/components/yearProgress/yearProgeress'
export default {
    created() {
       
    },
    components:{
        yaerProgress
    },
    data(){
        return{
           userInfo:{
               avatarUrl:'/static/images/other.png',
               nickName:'点击登录'
           }
        }
    },
    onShow(){
          let userinfo= wx.getStorageSync('userinfo')
          if(userinfo){
              this.userInfo=userinfo
          }
    },
  methods: {
    doLogin: function (e) {
        let user =wx.getStorageSync('userinfo')
        let self = this
        if(!user){
        qcloud.setLoginUrl(config.loginUrl)
        qcloud.login({
          success: function (userInfo) {
             qcloud.request({
                 url:config.usertUrl,
                 login:true,
                 success(userRes){
                     showSuccess('登录成功')
                     wx.setStorageSync('userinfo',userRes.data.data)
                     self.userInfo =userRes.data.data
                 }
             })
          },
          fail: function (err) {
            console.log('登录失败', err)
          }
        })
      }
      },
      async addBook(isbn){
          
          const res= await post('/weapp/addbook',{
            isbn,
            openid:this.userInfo.openId
          })
          console.log(res)
          showModal('添加成功',`${res.title}添加成功`)
          
          
          
      },
      scanBook(){
          wx.scanCode({
              success:(res)=>{
                  
                  if(res.result){
                      this.addBook(res.result)
                      
                  }
              }
          })
      }
  }
}
</script>
<style lang="scss">
.container{
    padding: 0 30rpx;
    .userinfo{
        margin-top:100rpx;
        text-align: center;
        img{
            width: 128rpx;
            height: 128rpx;
            margin: 20rpx;
            border-radius: 50%;
        }
    }
    .getuserinfo{
        border:none
    }
}
    
</style>