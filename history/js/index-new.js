// $(function () {
//
//     $('.wrapper').on('click','a',function () {
//         //渲染页面  页面标识
//         var page = $(this).parent().data('page');
//         render(page);
//         /*地址保持一致*/
//         /*追加地址  而且这个地址后台一定要存在*/
//         var historyUrl = $(this).attr('href');
//         history.pushState(null,null,historyUrl);
//         return false;
//     });
//     /*监听切换历史*/
//     window.onpopstate = function () {
//         /*获取地址栏信息*/
//         console.log(location.pathname);
//         /*根据信息判断需要加载什么页面的内容*/
//         /*根据信息判断需要加载什么页面的内容*/
//         var pathname = location.pathname;
//         var page = 'index';
//         if(pathname.indexOf('index.php') > -1 ){
//             page = 'index';
//         }else if(pathname.indexOf('my.php') > -1){
//             page = 'my'
//         }else if(pathname.indexOf('friend.php') > -1){
//             page = 'friend';
//         }
//         render(page);
//     }
//
//     /*3.切换历史渲染页面*/
//     // 监听历史切换
//     // window.onpopstate=function (e) {
//     //
//     //     //获取地址栏信息
//     //     console.log('xxxx');
//     //     console.log(location.pathname);
//     //     console.log(location.href);
//     //     console.log(e);
//     //     // render();
//     // }
//     /*1.ajax异步加载 渲染页面*/
//
//     // console.log(render());
//
//     /*2.渲染什么页面需要和后台提供的地址保持一致*/
//
// });
// var render = function (page) {
//     $.ajax({
//         type: "GET",
//         url: "api/data.php",
//         dataType: "json",
//         data: {
//             page: page
//         },
//         success: function () {
//             // 渲染界面
//             // 去除全部的now
//             $('[data-page]').removeClass("now");
//             // 给需要渲染的加上now
//             // $('[data-pag='+data.page+']').addClass("now");
//             $('[data-page="'+data.page+'"]').addClass('now');
//             // 加载网页内容
//             $(".content").html(data.html);
//
//         }
//
//     });
// }

// $(function () {
//     $('.wrapper').on('click','a',function () {
//         //渲染页面  页面标识
//         var page = $(this).parent().data('page');
//         render(page);
//         /*地址保持一致*/
//         /*追加地址  而且这个地址后台一定要存在*/
//         var historyUrl = $(this).attr('href');
//         history.pushState(null,null,historyUrl);
//         return false;
//     });
//     /*监听切换历史*/
//     window.onpopstate = function () {
//         /*获取地址栏信息*/
//         console.log(location.pathname);
//         /*根据信息判断需要加载什么页面的内容*/
//         var pathname = location.pathname;
//         var page = 'index';
//         if(pathname.indexOf('index.php') > -1 ){
//             page = 'index';
//         }else if(pathname.indexOf('my.php') > -1){
//             page = 'my'
//         }else if(pathname.indexOf('friend.php') > -1){
//             page = 'friend';
//         }
//         render(page);
//     }
// });
// var render = function (page) {
//     /*怎么调用ajax 请求方式  请求地址  请求参数  返回数据结构和意义 */
//     /*发出请求*/
//     $.ajax({
//         type:'get',
//         url:'api/data.php',
//         data:{
//             page:page
//         },
//         dataType:'json',
//         success:function (data) {
//             /*渲染页面*/
//             /*选中样式*/
//             $('[data-page]').removeClass('now');
//             /*data返回了当前页面的标识*/
//             $('[data-page="'+data.page+'"]').addClass('now');
//             /*网页内容*/
//             $('.content').html(data.html);
//         }
//     });
// }

$(function () {
    $(".wrapper").on("click",'a',function () {
        // 渲染页面
        var page=$(this).parent().data('page');
        render(page);
        // 追加地址
        var hisurl=$(this).attr('href');
        history.pushState(null,null,hisurl);
       return false;
    });
    window.onpopstate=function () {
        var localpost=location.pathname;
        var page='index';
        if(localpost.indexOf('my.php')>-1){
            page='my';
        }else if(localpost.indexOf('index.php')>-1){
            page='index';
        }else if(localpost.indexOf('friend.php')>-1){
            page='friend';
        }
        render(page);
        // console.log(localpost);

    }

});
var render = function (page) {
    $.ajax({
        type:'GET',
        // url:'api/data.php',
        url:'http://localhost/H5C3/day4/history/api/data.php',
        dataType:'json',
        data:{
            page:page
        },
        success:function (data) {
            console.log(data);
            // 加载样式
            // document.querySelector('data-page').removeClass('now');
            // $('.wrapper li').removeClass('now');
            // $('.wrapper li:data-page="'+data.page+'"').addClass('now');
            // // // 渲染界面
            // $('.content').html(data.html);
            $('[data-page]').removeClass('now');
            /*data返回了当前页面的标识*/
            $('[data-page="'+data.page+'"]').addClass('now');
            /*网页内容*/
            $('.content').html(data.html);

        }
    });
}

// render('index');
