效果方法
https://www.w3cschool.cn/jquery/jquery-ref-effects.html
$(function(){
    //code
    //等同于 $(document).ready(function(){});
});//确保文档完全加载
$("p").click(function(){
  // action goes here!!
});
$(selector).hide(speed,callback);//隐藏
$(selector).show(speed,callback);//显示
$(selector).toggle(speed,callback);//隐藏显示切换
//可选的 speed 参数规定隐藏/显示的速度，可以取以下值："slow"、"fast" 或毫秒。
//可选的 callback 参数是隐藏或显示完成后所执行的函数名称。
$(selector).fadeIn(speed,callback);//逐渐显示
$(selector).fadeOut(speed,callback);//逐渐隐藏
$(selector).fadeToggle(speed,callback);//逐渐隐藏显示切换

$(selector).fadeTo(speed,opacity,callback);//渐变
//必需的 speed 参数规定效果的时长。它可以取以下值："slow"、"fast" 或毫秒。
//fadeTo() 方法中必需的 opacity 参数将淡入淡出效果设置为给定的不透明度（值介于 0 与 1 之间）。
//可选的 callback 参数是该函数完成后所执行的函数名称。
$(selector).slideDown(speed,callback);//向下滑动显示
$(selector).slideUp(speed,callback);//向上滑动显示
$(selector).slideToggle(speed,callback);//向上向下切换

 $(selector).animate({params},speed,callback);//动画
 //必需的 params 参数定义形成动画的 CSS 属性。
 /*
     $("button").click(function(){
      $("div").animate({left:'250px'});
    });
 */
 //必须使用 Camel 标记法书写所有的属性名，比如，必须使用 paddingLeft 而不是 padding-left，使用 marginRight 而不是 margin-right，等等。
 //相对值 width:'+=150px'
 //预定义值 height:'toggle' "show"、"hide" 或 "toggle"：
//默认情况下，所有的 HTML 元素有一个静态的位置，且是不可移动的。 如果需要改变为，我们需要将元素的 position 属性设置为 relative, fixed, 或 absolute!

 $(selector).stop(stopAll,goToEnd);//停止动画
//可选的 stopAll 参数规定是否应该清除动画队列。默认是 false，即仅停止活动的动画，允许任何排入队列的动画向后执行。
//可选的 goToEnd 参数规定是否立即完成当前动画。默认是 false。
//因此，默认地，stop() 会清除在被选元素上指定的当前动画。
