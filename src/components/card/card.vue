<template>
<a  :href="detailUrl">
    <div class="book-card">
        <div class="thumb">
            
            <img :src="src" class="image" alt="no pic" mode='aspectFit'>
        </div>
        <div class="detail">
            <div class="row  text-primary">
                <div class="right">
                  评分{{book.rate}}<Rate :value='book.rate'></Rate>
                </div>
                <div class="left">
                 {{book.title}}
                </div>
            </div>
            <div class="row  text-primary">
                <div class="right">
                  {{book.author}}
                </div>
                <div class="left">
                作者：
                </div>
            </div>
            <div class="row  text-primary">
                <div class="right">
                  {{book.publisher}}
                </div>
                <div class="left">
                 出版社:
                </div>
            </div>
        </div>
    </div>
    </a >
</template>
<script>
import Rate from '../Rate/rate'
export default {
    components:{
        Rate
    },
    props:['book'],
    computed: {
        src(){
            if(this.book.pic==''){
                return '/static/images/other.png'
            }else{
                return this.book.pic
            }
            
        },
        detailUrl(){
            return '/pages/detail/main?id='+this.book.id
        }
    }
    
}
</script>
<style lang="scss" scoped>
   .book-card{
       font-size: 14px;
       padding:5px;
       overflow:hidden;
       margin-top:5px;
       margin-bottom:5px;
       .thumb{
           width:90px;
           height:90px;
           float:left;
           margin:0 auto;
           overflow:hidden;
           .image{
               max-height:100%;
               max-width:100%;
           }
       }
       .detail{
           margin-left: 100px;
           .row{
               line-height: 20px;
               margin-bottom: 3px;
           }

       }
       .right{
           float: right;
       }
       .left{
           margin-right: 80px;
       }
   }
</style>
 