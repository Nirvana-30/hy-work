var uCover_1 =document.querySelector('#geDan').querySelectorAll('.u-cover-1');
var count;

const jhr = new XMLHttpRequest();

jhr.open('get', 'http://sandyz.ink:3000/personalized',true);

jhr.onreadystatechange = () => {
  if (jhr.readyState === 4) {
    if ((jhr.status >= 200 && jhr.status < 300) || jhr.status == 304) {
     const res = JSON.parse(jhr.responseText);
      console.log(res);
      console.log('请求成功');
      console.log(res.result[0].picUrl);
        document.querySelector('#geDan').addEventListener('click',function(e){
           function checkAdult(age) {
              return (
                age.picUrl.replace(/\"/g, "") == e.target.style.background.substring(5,77).replace(/\"/g, "")
                ||age.name==e.target.innerHTML
                );
          }
          function myFunction() {
             count = res.result.findIndex(checkAdult);
          }
          myFunction();
          console.log(count);
          uCover_1.forEach(element => {
            element.querySelector('.song-menu').href='./playlist.html?'+count+'&'+res.result[count].id;
            element.querySelector('.dec').querySelector('a').href='./playlist.html?'+count+'&'+res.result[count].id;
        });
    
         })
        
    } else {
      console.log('请求失败');
    }
  }
};
//发送请求
jhr.send();




