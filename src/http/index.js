 //封装http请求
 import Axios from 'axios'
 import store from '../store'
 import { Notification, Loading } from 'element-ui'

 // //请求全局设置
 Axios.defaults.headers.common['Authorization'] = 'qms';
 Axios.defaults.headers.post['Content-Type'] = 'application/json';

 //request请求拦截,设置全局请求为ajax请求
 Axios.interceptors.request.use((config) => {
     config.headers['X-Requested-With'] = 'XMLHttpRequest';
     return config;
 });

 //response响应拦截
 Axios.interceptors.response.use((response) => {

 });


 //创建请求
 const axios = Axios.create({
     baseURL: '/',
     timeout: 5000
 });


 const http = ({ methods = 'post', url, options = {} }) => {
     let promise, m = false;
     let load = { close: () => {} };
     setTimeout(() => {
         !m && (load = Loading.service({
             fullscreen: ture,
             text: '资源加载中，请等待。。。。。。'
         }));
     }, 500)

     const commonOptions = {}; //JSON.parse(JSON.stringify(store.state.common));
     Object.assign(commonOptions, options);
     switch (method) {
         case 'get':
             promise = new Promise(function(resolve, reject) {
                 axios.get(url, { params: commonOptions }).then(response => {
                     m = true;
                     load.close();
                     if (response.data.code && response.data.code == 200) {
                         resolve(response.data.body);
                     } else {
                         reject(response.data.msg);
                     }
                 }, er => {
                     m = true;
                     load.close();
                     errHandler(er);
                 });
             });
             break;
         case 'post':
             promise = new Promise(function(resolve, reject) {
                 axios.post(url, commonOptions).then(response => {
                     m = true;
                     load.close();
                     if (response.data.code && response.data.code == 200) {
                         resolve(response.data.body);
                     } else {
                         reject(response.data.msg);
                     }
                 }, er => {
                     m = true;
                     load.close();
                     errHandler(er);
                 })
             });
             break;
         default:
             break;
     }
     return promise;
 }

 function errHandler(er) {
     Notification.error({
         title: '网络连接错误',
         message: '请检查您的网络连接是否正常'
     });
 }
 export default http