# 浮动
使得文本脱离文档流
导致高度塌陷

# 清除浮动
1. 在最后一个元素后面增加一个冗余元素,给他设置clear:both;
2. 给父元素增加伪类
.clearfix::after{
    content: '';
    display: block;
    clear: both;
}
3. bfc 
在父容器中加一个overflow属性,只要overflow的值不为visible的元素；
4. 将父容器也设置成浮动,父容器可以获得高度,但是后面的元素依然脱离文档流.不建议使用.


# margin 重叠
bfc
在父容器中加一个overflow属性,只要overflow的值不为visible的元素；
就可以解决margin 重叠问题

