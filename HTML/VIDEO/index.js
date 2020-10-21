// 拿到要操作的dom结构
// 在这个dom上滑动鼠标能控制滑块的位置
// 能控制这个dom的高度发生变化
// 根据该dom高度的值来调整视频播放的速度


// document.querySelector('.speed')
// console.log(document.querySelector('.speed'));

var speed = document.querySelector('.speed')
var bar = document.querySelector('.speed-bar')
var video = document.querySelector('.flex')

//往speed上注册一个事件,可以被注册的事件具备一个事件参数
speed.addEventListener('mousemove',function(e) {
    // 控制滑块的位置
    // console.log(e);
var y = e.pageY - speed.offsetTop  //offsetTop是获取某个dom结构到浏览器到屏幕顶端的距离
var percent = y / speed.offsetHeight //offsetTop是获取dom结构自身的高度
var min = 0.4
var max = 4
//将percent设置成百分数,Math.round()函数实现四舍五入
var height = Math.round(percent * 100) + '%'
var playbackRate = percent * (max - min) + min
bar.style.height = height
video.playbackRate = playbackRate
bar.textContent = playbackRate.toFixed(2) + 'x'
})
