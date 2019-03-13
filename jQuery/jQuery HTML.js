HTML/CSS方法
https://www.w3cschool.cn/jquery/jquery-ref-html.html
//DOM
    text() - 设置或返回所选元素的文本内容  -$("#test").text()；
    html() - 设置或返回所选元素的内容（包括 HTML 标记）-$("#test").html()；
    val() - 设置或返回表单字段的值 -$("#test").val()  <p>名称: <input type="text" id="test" value="W3Cschool教程"></p>；
attr()- 获取属性值  -alert($("#w3s").attr("href"));
// 设置值
$("#test1").text("Hello world!");
$("#test2").html("<b>Hello world!</b>");
$("#test3").val("W3Cschool");
//text()、html() 以及 val()，同样拥有回调函数。
//回调函数有两个参数：被选元素列表中当前元素的下标，以及原始（旧的）值。然后以函数新值返回您希望使用的字符串。
$("#test1").text(function(i,origText){
   return "Old text: " + origText + " New text: Hello world!
   (index: " + i + ")";
 });

     append() - 在被选元素内部的结尾插入指定内容 $("#target5").clone().appendTo("#left-well");
     prepend() - 在被选元素内部的开头插入指定内容
     after() - 在被选元素之后插入内容
     before() - 在被选元素之前插入内容

 var txt1="<b>I </b>";                    // 使用 HTML 创建元素
 var txt2=$("<i></i>").text("love ");     // 使用 jQuery 创建元素
 var txt3=document.createElement("big");  // 使用 DOM 创建元素
 txt3.innerHTML="jQuery!";

 $("p").append(txt1,txt2,txt3);
 $("img").after(txt1,txt2,txt3);

    remove() - 删除被选元素（及其子元素）
    empty() - 从被选元素中删除子元素
jQuery remove() 方法也可接受一个参数，允许您对被删元素进行过滤。该参数可以是任何 jQuery 选择器的语法。
    addClass() - 向被选元素添加一个或多个类
    removeClass() - 从被选元素删除一个或多个类
    toggleClass() - 对被选元素进行添加/删除类的切换操作
    css() - 设置或返回样式属性
jQuery尺寸
https://7n.w3cschool.cn/statics/images/course/img_jquerydim.gif
https://www.w3cschool.cn/jquery/jquery-dimensions.html
