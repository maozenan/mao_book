<template>
<div class="bookinfo">
    <div class="thumb">
      <img class="back" :src="info.pic" mode='aspectFill'>  
       <img  class="img" :src="info.pic" mode="aspectFit">
       <div class="info">
       <div class="title">
           {{info.title}}
       </div>
       <div class="author">
           {{info.author}}
       </div>
   </div>
    </div>
   <div class="owner">
       添加人
       <div class="right text-primary">
           {{info.rate}}分
           <Rate :value="info.rate"></Rate>
       </div>
   </div>
   <div class="detail">
       {{info.publisher}}
     <div class="right">
           {{info.page}}页
       </div>
   </div>
   <div class="summary">
       {{summary}}
   </div>
</div>
</template>
<script>
import Rate from '../../components/Rate/rate'
export default {
    props:['info'],
    components:{
        Rate
    },
    computed: {
       summary(){
           return (this.info.summary+'').split('\n')
       }
    }
}
</script>
<style lang="scss">
 .bookinfo{
     font-size: 14px; 
     .right{
         float:right;
     }
     .detail{
         padding: 5px 10px;
     }
     .thumb{
         width: 750rpx;
         height: 500rpx;
         overflow: hidden;
         .back{
             filter:blur(10px);
             width: 100%;
         }
         .img{
             position: absolute;
             width: 100%;
             height: 300rpx;
             left:10rpx;
             top: 3px
         }
     } 
     .info{
         color: white;
         position: absolute;
         width: 100%;
         left: 0;
         top: 330rpx;
         text-align: center;
         
             .title{
                 font-size: 20px;
             }
             .author{
                  font-size: 14px; 
             }
         
     }
 }
</style>
