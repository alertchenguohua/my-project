//pay.vue写我们的组件
import vpay from './pay.vue';
//定义我们的组件
const myPlugin = {
    //该插件有一个install方法
    //方法的第一个参数传入Vue 第二个参数传入插件所需自定义参数
    install(Vue){
        //将其注册为一个vue组件 vpay是组件名称 pay是组件
        Vue.component('vpay', vpay);

    }
}
//最后将其导出  在main.js中可以通过Vue.use() 使用
export default myPlugin;  