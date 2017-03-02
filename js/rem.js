(function (doc, win) {
  //orientationchange : 判断手机是水平方向还是垂直方向，感应方向

  //doc ==》 document对象
  //doc.documentElement ==> 得到文档的根元素-->  <html>
  //之所以要得到文档的根元素，是为了计算网页所打开时屏幕的真实宽度
  var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      //获取不同移动端设备上的宽度
      if (!clientWidth) return;
      //320 是我们默认的手机屏幕 
      //clientWidth 是我们页面打开时所得到的屏幕（可看见页面的真实宽度）宽度真实的宽度值
      //这两者相除得到一个放大或缩小的比例值
      //320 ip5 --> 20px
      //375 ip6
      //414 ip6plus --> 25px;
      //width:2rem;
      docEl.style.fontSize = 20 * (clientWidth / 750) + 'px';
      //设置根元素font-size 10.4167px
    };
    /*600px
    20 * 600/320  -- >  [2 -- 3] 放大范围

    200/320 -- > [0.5 -- 0.1] 缩小*/
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
  //当dom加载完成时，或者 屏幕垂直、水平方向有改变进行html的根元素计算
})(document, window);
