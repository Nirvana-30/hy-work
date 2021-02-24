const ohr = new XMLHttpRequest();
//初始化一个get请求
ohr.open('get', 'http://sandyz.ink:3000/personalized',true);
//接收返回值

ohr.onreadystatechange = () => {
  if (ohr.readyState === 4) {
    if ((ohr.status >= 200 && ohr.status < 300) || ohr.status == 304) {
     const res = JSON.parse(ohr.responseText);
      console.log(res);
      console.log('请求成功');
      var uCover = document.querySelectorAll('.u-cover-1');
      for(var i = 0;i<10;i++){
        uCover[i].querySelector('.song-menu').style.background='url'+'('+res.result[i].picUrl+')';
        uCover[i].querySelector('a').style.backgroundRepeat='no-repeat';
        uCover[i].querySelector('a').style.backgroundSize=100+'%';
        uCover[i].querySelector('.dec').querySelector('a').innerHTML=res.result[i].name;
        uCover[i].querySelector('.nb').innerHTML=
      (res.result[i].playCount>10000?(parseInt(res.result[i].playCount/10000)+'万'):res.result[i].playCount)
      }
    } else {
      console.log('请求失败');
    }
  }
};
//发送请求
ohr.send();