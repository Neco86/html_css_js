遍历方法
https://www.w3cschool.cn/jquery/jquery-ref-traversing.html
向上遍历 DOM 树
parent()//直接父元素
parents()//所有父元素
parentsUntil()//介于两者之间的父元素

向下遍历 DOM 树
children()//直接子元素，参数可为选择器
find()//所有子元素

在 DOM 树中水平遍历
siblings()//所有同胞
next()//下一个同胞
nextAll()//所有跟随的同胞元素
nextUntil()
prev()
prevAll()
prevUntil()

过滤
三个最基本的过滤方法是：first(), last() 和 eq()，它们允许您基于其在一组元素中的位置来选择一个特定的元素。
其他过滤方法，比如 filter() 和 not() 允许您选取匹配或不匹配某项指定标准的元素。
$("p").eq(1);//索引号从 0 开始,下面的例子选取第二个 <p> 元素（索引号 1）：
