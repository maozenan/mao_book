const https =require('https')
const {mysql} =require('../qcloud')
module.exports =async (ctx)=>{
    const {isbn,openid} = ctx.request.body
    if(isbn&&openid){
    const findRes=await mysql('books').select().where('isbn',isbn)
    if(findRes.length){
        ctx.state={
            code:-1,
            data:{
                msg:'图书已存在'
            }
        }
        return
    }
   

      let url='https://api.jisuapi.com/isbn/query?appkey=b06c56b11cfa3ab3&isbn='+isbn
      const bookinfo =await getJSON(url)
      console.log(bookinfo)
      const {title,author,summary,pic,publisher,pubplace,pubdate,page,keyword}=bookinfo.result
      try{
        
        await mysql('books').insert({
            isbn,openid,title,author,pic,summary,publisher,pubplace,pubdate,page,keyword
        })
        ctx.state.data={
            title,
            msg:'success'
        }
    }catch(e){
       ctx.state={
           code:-1,
           data:{
               msg:'新增失败'+e.sqlMessage
           }
       }
    }
      
    }
   
    
}
function getJSON(url){
    return new Promise((reslove,reject)=>{
        https.get(url,res=>{
            let urlData=''
            res.on('data',data=>{
                urlData+=data
            })
            res.on('end',data=>{
                const bookinfo = JSON.parse(urlData)
                if(bookinfo.msg){
                    reslove(bookinfo)
                }else{
                    reject(bookinfo)
                }
            })
        })
    })
}

