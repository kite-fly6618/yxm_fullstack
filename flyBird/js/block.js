function Block() {
  this.upDivWrap = null
  this.downDivWrap = null
  this.downHeight = baseObj.randomNum(0, 150)
  this.gapHeight = baseObj.randomNum(150, 160)
  this.upHeight = 312 - this.downHeight - this.gapHeight

  // 生成管道
    this.CreateDiv = function(url,height,positionType,left,top) {
      var newDiv = document.createElement('div')
      newDiv.style.width = '62px'
      newDiv.style.height = height
      newDiv.style.position = positionType
      newDiv.style.left = left
      newDiv.style.top = top
      newDiv.style.backgroundImage = url
      return newDiv
    }

    this.createBlock = function() {
      var upDiv1 = this.CreateDiv('url(img/up_mod.png',this.upHeight+'px')
      var upDiv1 = this.CreateDiv('url(img/up_pipe.png','60px')
      this.upDivWrap = this.CreateDiv(null,null,'absolute','450px')
      this.upDivWrap.appendChild(upDiv1)
      this.upDivWrap.appendChild(upDiv1)

      var downDiv1 = this.CreateDiv('url(img/down_pipe.png','60px')
      var downDiv2 = this.CreateDiv('url(img/down_mod.png',this.downHeight+'px')
      this.downDivWrap = this.CreateDiv(null,null,'absolute','450px',363-this.downHeight+'px')
      this.downDivWrap.appendChild(downDiv1)
      this.downDivWrap.appendChild(downDiv2)

      jsWrapBg.appendChild(this.upDivWrap)
      jsWrapBg.appendChild(this.downDivWrap)
    }

    //控制管道移动
    this.moveBlock = function() {
      this.upDivWrap.style.left = this.upDivWrap.offsetLeft-3+'px'
      this.downDivWrap.style.left = this.upDivWrap.offsetLeft-3+'px'
    }

}