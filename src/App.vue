<script>
import config from '../src/config.js'
import {get} from '../src/utils/index.js'
import qcloud from 'wafer2-client-sdk'
export default {
  async created(){
    const res = await get('/weapp/demo')
    console.log(res);
    console.log('小程序启动了')
  }
  
}
</script>
<style>
 .text-primary{
   color:#EA5149
 }
 .text-footer{
   text-align: center;
   font-size: 12px;
 }
</style>
