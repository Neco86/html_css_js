AJAX方法
https://www.w3cschool.cn/jquery/jquery-ref-ajax.html
什么是 AJAX？
AJAX = 异步 JavaScript 和 XML（Asynchronous JavaScript and XML）。
简短地说，在不重载整个网页的情况下，AJAX 通过后台加载数据，并在网页上进行显示。

$(selector).load(URL,data,callback);
必需的 URL 参数规定您希望加载的 URL。
可选的 data 参数规定与请求一同发送的查询字符串键/值对集合。
可选的 callback 参数是 load() 方法完成后所执行的函数名称。

$.get(URL,callback);
$.post(URL,data,callback);

jQuery - noConflict() 方法
使用jQuery中的noConflict()方法，它允许你在同一个页面加载多个jQuery实例，尤其是不同版本的jQuery。
//取消简写
$.noConflict();
jQuery(document).ready(function(){
  jQuery("button").click(function(){
    jQuery("p").text("jQuery is still working!");
  });
});
//修改简写
var jq = $.noConflict();
jq(document).ready(function(){
  jq("button").click(function(){
    jq("p").text("jQuery is still working!");
  });
});
//函数内部简写
$.noConflict();
jQuery(document).ready(function($){
  $("button").click(function(){
    $("p").text("jQuery is still working!");
  });
});
