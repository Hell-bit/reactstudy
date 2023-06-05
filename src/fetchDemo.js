/*
向服务器发送请求的方案
第一类：XMLHttpRequest
    + ajax   自己编写请求的逻辑和步骤
    + axios: 第三方库，对XMLHttpRequest进行二次封装「基于promise封装」
第二类：fetch
    + es6内置的API，本身就是基于promise，用全新的方案实现客户端和服务端的数据请求
    + 不兼容IE
    + 不如XMLHttpRequest
第三类：其他方案，主要是跨域为主
    + jsonp
    + postMessage
    + 利用img的src发送请求，实现数据埋点和上报
*/
