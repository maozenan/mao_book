<template>
<div>
    <BookInfo :info="info"></BookInfo>
     <div class="phoneinfo">
       <button @click='getphoneinfo'>点击获取手机信息</button>
       {{phoneinfo.brand}},{{phoneinfo.model}}
    </div>
    </div>
</template>
<script>
import {get} from '../../utils/index.js'
import BookInfo from '../../components/BookInfo/BookInfo'
export default {
    data(){
        return {
            bookid:'',
            info:{} ,
            phoneinfo:{}
        }
    },
    components:{
        BookInfo
    },
    methods: {
        async getDetail(){
            const info = await get('/weapp/bookdetail',{id:this.bookid})
            wx.setNavigationBarTitle({
                title:info.title
            })
            this.info = info
            console.log(info)
        },
        getphoneinfo(){
          this.phoneinfo = wx.getSystemInfoSync()
        }
    },
    mounted(){
        this.bookid=this.$root.$mp.query.id
        this.getDetail()
    }
}
</script>
<style lang="sass" scoped>

</style>
