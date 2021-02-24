function setheight(){
  var index =document.getElementsByClassName('play-result')[0];
  index.style.overflow="auto";
}
setheight();


var img1=document.querySelector('.list-header').querySelector('img');
var img2=document.querySelector('.autor').querySelector('img');
var name1=document.querySelector('.autor').querySelectorAll('span');


if(location.search[2]>='0'&&location.search[2]<='9')
{
  var count= (+location.search[1])*10+(+location.search[2]);
  var id= +location.search.substring(4);
  console.log(count);
  console.log(id);
}
else{
  var count= +location.search[1];
  var id= +location.search.substring(3);
  console.log(count);
  console.log(id);
}

const dhr = new XMLHttpRequest();

dhr.open('get', 'http://sandyz.ink:3000/personalized',true);

dhr.onreadystatechange = () => {
  if (dhr.readyState === 4) {
    if ((dhr.status >= 200 && dhr.status < 300) || dhr.status == 304) {
     const res = JSON.parse(dhr.responseText);
      console.log(res);
      console.log('请求成功');

      
      
    } else {
      console.log('请求失败');
    }
  }
};
//发送请求
dhr.send();

// 获取歌单详情信息
var title =document.querySelector('.list-name');//标题
var autor =document.querySelector('.autor').querySelector('span');
var label=document.querySelector('.label')//标签
var times =document.querySelector('.times');//播放次数
var songlist=document.querySelector('.songList');//列表歌曲

const lhr = new XMLHttpRequest();

lhr.open('get', `http://sandyz.ink:3000/playlist/detail?id=${id}`,true);

lhr.onreadystatechange = () => {
  if (lhr.readyState === 4) {
    if ((lhr.status >= 200 && lhr.status < 300) ||lhr.status == 304) {
     const res = JSON.parse(lhr.responseText);
      console.log(res);
      console.log('请求成功');
      console.log(res.playlist);
      title.innerHTML=res.playlist.name;//主题
      img1.src=res.coverImgUrl;
      img2.src=res.playlist.creator.avatarUrl;
      autor.innerHTML =res.playlist.creator.nickname;
      res.playlist.tags.forEach(element => {
        label.insertAdjacentHTML('beforeend',`<span class="tags">${element}</span>`)//标签
      });
      img2.src=res.playlist.creator.avatarUrl;
      for(var i=0;i<res.playlist.tracks.length;i++){
        songlist.insertAdjacentHTML('beforeend',`<table class="tb">
        <tr>
          <td>${i+1}</td>
          <td><a href="#" target="blank">
          <img src="./images/bf1.png" alt="">
          </a></td>
          <td>${res.playlist.tracks[i].name}</td>
          <td></td>
          <td>${res.playlist.tracks[i].ar[0].name}</td>
          <td>${res.playlist.tracks[i].al.name}</td>
        </tr>
  </table>`)

      }
      let tr=document.querySelector('.songList').querySelectorAll('tr');
     
      //渲染时长

      for(let i=0;i<res.playlist.tracks.length;i++){
        const xhr = new XMLHttpRequest();

      xhr.open('get', 'http://sandyz.ink:3000/song/url?id='+res.playlist.tracks[i].id,true);

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            const res = JSON.parse(xhr.responseText);
            console.log(res);
            let tr=document.querySelector('.songList').querySelectorAll('tr');//获取列表中的行
            let audio =document.querySelectorAll('audio');
            let time;
            audio[i].src=res.data[0].url;
            console.log(audio);
            audio[i].addEventListener("canplay",function(){
              time=parseInt(audio[i].duration);
        
            let  minute = time / 60;
            let minutes = parseInt(minute);
            if (minutes < 10) {
              minutes = "0" + minutes;
            }
            //秒
            let second = time % 60;
            let seconds = Math.round(second);
            if (seconds < 10) {
              seconds = "0" + seconds;
            }
            console.log(minutes+','+seconds);
            tr[i].querySelectorAll('td')[3].innerHTML=minutes+':'+seconds;//时长
            })
            console.log('请求成功');
          } else {
            console.log('请求失败');
          }
        }
        
      };
      
      //发送请求
      xhr.send();
 
};

      for(let i=0;i<res.playlist.tracks.length;i++){
        tr[i].addEventListener('click',function(e){
          flag1=this;
          console.log(this.querySelectorAll('td')[2].innerHTML);
          e.stopPropagation();

          function checkAdult(age) {
            return (
              age.name ==  flag1.querySelectorAll('td')[2].innerHTML
              
              );
        }
        function myFunction() {
           count = res.playlist.tracks.findIndex(checkAdult);
        }
        myFunction();
        
        //改变a标签实现跳转到播放页
        tr[i].querySelectorAll('td')[1].querySelector('a').href="./player.html?"+res.playlist.tracks[count].id+'&'+id;

        
        })
      }
      
    } else {
      console.log('请求失败');
    }
  }
};
//发送请求
lhr.send();


