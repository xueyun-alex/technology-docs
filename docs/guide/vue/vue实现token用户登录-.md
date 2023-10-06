# vue实现token用户登录

## 一、思路

1、在第一次登录的时候前端调用后端的接口，把用户名和密码传给后端。

2、后端收到请求，验证用户名和密码，验证成功后，返回给前端一个token值。

3、前端收到后端传给的token值，将token存储在本地 loaclStorage和vuex中。（本次项目用的是vue框架，使用了vuex全局状态管理）

4、前端每次路由跳转，就判断localStorage中是否有token，如果没有就跳转登录页面，如果有就跳转到相应的页面。

5、分装一公用的请求接口方法，每次请求调用后端接口，都在请求头中带上token

6、后端判断请求头中是否有token，如果有token就拿到token并且验证token,验证成功返回数据，验证失败(例如token过期)，就返回给前端一个状态码，一般是401，请求头中没有token也返回401 （第6步是后端做，前端只要根据后端返回都状态做相应都处理就行了）

7、如果前端拿到后台返回都状态码是401，就清除token并跳转登录页面。

## 二、具体步骤

### 1、在项目中store中都store.js文件里添加保存和删除token都全局方法。

```js
//  store.js 中都mutation中增加添加和删除token的方法
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {     // 全局管理的数据存储
	 isLogin:'0',
	 ser:null,
	 token:localStorage.getItem('token') ? localStorage.getItem('token'):'',   // token
};
export default new Vuex.Store({
	state,
	getters:{    // 监听数据变化的
		getStorage(state){   // 获取本地存储的登录信息
	      if(!state.token){
	        state.token =JSON.parse(localStorage.getItem(key))
	      }
	      return state.token
	    }
	},
	mutations:{
		$_setToken(state, value) { // 设置存储token
	        state.token = value;
	        localStorage.setItem('token', value);
	    },
	    $_removeStorage(state, value){  // 删除token
		      localStorage.removeItem('token');
	    },
	}
})
```
### 2、在登录页面(login.vue)中登录方法调用接口成功后把token存储在本地存储中localStorage。

```js
// login.vue页面
methods:{
	loginFun(){
		this.$api.post('请求的后端接口链接',{
				data:{
					userId:this.user,   // 登录名
		            userPwd:this.psw,  // 登录密码
				}
		}).then((res) => {
			if(res.data.status == 200){
				var userInfo = res.data.data;
				this.$store.commit('$_setToken', userInfo.token);
				Toast({ message: '登录成功', type: 'success',duration: 1500});   // ui弹窗提示
                 this.$router.push({ name:'homePage' })；  // 跳转到首页
			} else {
				Toast({ message: res.data.message, duration: 1500});   // ui弹窗提示
			}
		})
	}
}
```
### 3、在main.js中添加请求拦截器，并在请求头中添加token。
```js
import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import PublicFun from './utils/publicFun'    // 公用方法

import './mintUi'   // 按需引入mintUi 组建   如需配置到mintUi.js去配置
import '@/assets/mui/css/mui.css' // mui.css样式

/*引入axios插件*/
import axios from 'axios'
Vue.prototype.$http = axios;

// 全局路由构造函数，判断是否登录和要跳转到页面
router.beforeEach((to, from, next) => {
  if (to.matched.some(m => m.meta.requireAuth)) {    // 需要登录
    if(window.localStorage.token && window.localStorage.isLogin === '1'){
      next()
    } else if (to.path !== '/login') {
      let token = window.localStorage.token;
      if (token === 'null' || token === '' || token === undefined){
          next({path: '/login'})
          Toast({ message: '检测到您还未登录,请登录后操作！', duration: 1500 })
      }
    } else {
      next()
    }
  } else {   // 不需要登录
    next()
  }
})



// 配置公共url
Axios.defaults.baseURL = "http://www.sinya.online/api/"
//添加请求拦截器
axios.interceptors.request.use(
  config =>{
    if(store.state.token){
      config.headers.common['token'] =store.state.token
    }
    return config;
  },
  error =>{
    //对请求错误做什么
    return Promise.reject(error);
  })

//http reponse响应拦截器
axios.interceptors.response.use(
  response =>{
    return response;
  },
  error=>{
    if(error.response){
      switch(error.response.status){
        case 401:
          localStorage.removeItem('token');
          router.replace({
            path: '/views/login',
            query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
          })
      }
    }
  })

Vue.prototype.$publicFun = PublicFun   // 挂载全局公用方法
Vue.prototype.$apps = Apps    //  app.js公用方法
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```
## 三、退出的时候
```js
returnFun(){   // 退出登录
	 MessageBox.confirm(this.lang.logoutTip).then(action => {
	     this.$store.commit('$_removeStorage');    // 清除登录信息
	     this.$router.push({
	         name:'login'
	     });
	     Toast({message:this.lang.logoutSuccess, duration: 1500});
	 }).catch(()=>{})
}
```
