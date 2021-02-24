const xhr1 = new XMLHttpRequest();

xhr1.open('get', 'http://sandyz.ink:3000/personalized', true);

xhr.onreadystatechange = () => {
  if (xhr1.readyState === 4) {
    if ((xhr1.status >= 200 && xhr1.status < 300) || xhr1.status == 304) {
      const res1 = JSON.parse(xhr1.responseText);
      console.log(res1);
      console.log('请求成功');
      console.log(res1.result[0].picUrl);
      var img =document.querySelector('.u-cover-1')
      for(var i =0;i<10;i++){
        // img[i].querySelector('a').style.background='url'='('+res.result[i].picUrl+')';
        img[i].querySelector('a').style.backgroundSize=100+'%';
        img[i].querySelector('a').style.backgroundRepeat='no-repeat';
        img[i].querySelector('span').innerHTML=res.result[i].name;
        img[i].querySelector('p').innerHTML=(res1.result[i].playCount>10000?(parseInt(res1.result[i].playCount/10000)+'万'):res1.result[i].playCount)
      }
    } else {
      console.log('请求失败');
    }
  }
};
xhr1.send();