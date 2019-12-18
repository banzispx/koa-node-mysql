/*
在koa2中GET传值通过request接收，但是接收的方法有两种：query和querystring。
query：返回的是格式化好的参数对象。
querystring：返回的是请求字符串。
    从request中获取GET请求
		let request =ctx.request;
		let req_query = request.query;
		let req_querystring = request.querystring;
		//从上下文中直接获取
		let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;


    //请求方式   http://域名/product/123
    router.get('/product/:aid',async (ctx)=>{
      console.log(ctx.params); //{ aid: '123' }  //获取动态路由的数据
      ctx.body='这是商品页面';
    })
*/
