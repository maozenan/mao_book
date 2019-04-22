const {mysql} = require('../qcloud')

module.exports = async (ctx)=>{
    const {page} =ctx.request.query
    const size =6
    const books =await mysql('books').select('*').limit(size).offset(Number(page)*size).orderBy('id','desc')
    ctx.state.data={
        list:books
    }
}






