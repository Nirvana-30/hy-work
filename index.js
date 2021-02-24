var data
/*显示登录窗口*/
function showDiv() {
  var into = document.getElementsByClassName('into')[0];
  into.style.display = 'block';

}
/*关闭登录窗口*/

function closeDiv() {
  var into = document.getElementsByClassName('into')[0];
  into.style.display = "none";
}
function enterKey(event){
  event = event || window.event;
  if (event.keyCode == 13) {
    window.open('songlist.html','_self');
     getKey();
  }
}

var box = document.getElementById("photos");
const xhr = new XMLHttpRequest();

xhr.open('get', 'http://sandyz.ink:3000/banner', true);

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4) {
    if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
      const res = JSON.parse(xhr.responseText);
      console.log(res);
      console.log('请求成功');
      let template = '';
      res.banners.forEach((item, num) => {
        template += `
      <li id="images" class="left${num + 1}"><img src="${item.imageUrl}"/></li>
      `
      });
      box.innerHTML = template;
    } else {
      console.log('请求失败');
    }
  }
};
xhr.send();

/*设置按钮颜色*/
let index = 0;
var aSpan = document.querySelectorAll(".linep");
var aListName = ["left1", "left2", "left3", "left4", "left5", "left6", "left7", "left8", "left9","left10"];
function setLineBColor() {
  for (var i = 0, len = aSpan.length; i < len; i++) {
    aSpan[i].style.background = "#ccc";
  }
  aSpan[index].style.background = "#c52f30";
}

setLineBColor();

function nextPic() {
  var aLi = document.querySelectorAll("#images");
  aListName.unshift(aListName[9]);//把数组最后一个名字复制并插入到第一位置来
  aListName.pop();//删除最后一个值
  for (var i = 0; i < aLi.length; i++) {
    aLi[i].setAttribute('class', aListName[i]);
  }
  index = index + 1;
  if (index > 9) {
    index = 0;
  }
  setLineBColor();
}

function prePic() {
  aListName.push(aListName[0]);
  aListName.shift();//删除第一个值
  for (var i = 0; i < aLi.length; i++) {
    aLi[i].setAttribute('class', aListName[i]);
  }
  index = index - 1;
  if (index < 0) {
    index = 8;
  }
  setLineBColor();
}

var btnright = document.querySelector(".btnright");
btnright.onclick = nextPic;

var btnleft = document.querySelector(".btnleft");
btnleft.onclick = prePic;

var otime =setInterval(nextPic,2000);


function setheight(){
  var index =document.getElementById('index');
  index.style.overflow="auto";
}
setheight();


const bhr = new XMLHttpRequest();

bhr.open('get', 'http://sandyz.ink:3000/personalized/mv/exclusive/rcmd', true);

bhr.onreadystatechange = () => {
  if (bhr.readyState === 4) {
    if ((bhr.status >= 200 && bhr.status < 300) || bhr.status == 304) {
      const res = JSON.parse(bhr.responseText);
      console.log(res);
      console.log('请求成功');
      var uCover_2 = document.querySelectorAll('.u-cover-2');
      for(var i = 0;i<3;i++){
       uCover_2[i].querySelector('img').src = res.result[i].picUrl;
      };
    } else {
      console.log('请求失败');
    }
  }
};
bhr.send();



const chr = new XMLHttpRequest();

chr.open('get', 'http://sandyz.ink:3000/personalized/newsong', true)

chr.onreadystatechange = () => {
  if (chr.readyState === 4) {
    if ((chr.status >= 200 && chr.status < 300) || chr.status == 304) {
      const res = JSON.parse(chr.responseText);
      console.log(res);
      console.log('请求成功');
      var uCover_3 = document.querySelectorAll('.u-cover-3');
      for(var i = 0;i<9;i++){
        uCover_3[i].querySelector('img').src = res.result[i].picUrl;
        uCover_3[i].querySelector('span').innerHTML=res.result[i].name;
        uCover_3[i].querySelector('p').innerHTML=res.result[i].song.artists[0].name;
      }
    }
      else {
      console.log('请求失败');
    }
  }
}
chr.send();


var into = document.getElementsByClassName('into')[0];
    // 数据请求
    function myClick() {
        var usernamestr = document.getElementById("text").value;
        var passwordstr = document.getElementById("pw").value;
        var un_denglu =document.getElementsByClassName('un-denglu')[0];
        var photo_p =document.getElementsByClassName('denglu')[0];
        var out =document.getElementsByClassName('vip')[0];
        if(usernamestr==""||usernamestr==null){
            alert("账号为空");
            return;
        }
        if(passwordstr==""||passwordstr==null){
            alert("密码为空");
            return;
        }
       
        const dhr = new XMLHttpRequest();
    
        dhr.open('get', `http://sandyz.ink:3000/login/cellphone?phone=${usernamestr}&password=${passwordstr}`, true)
        
        dhr.onreadystatechange = () => {
          if (dhr.readyState === 4) {
            if ((dhr.status >= 200 && dhr.status < 300) || dhr.status == 304) {
              const res = JSON.parse(dhr.responseText);
              console.log(res);
              console.log('请求成功');
              if ('loginType' in res){
                into.style.display ='none';
                alert('欢迎回来'+res.profile.nickname);
                un_denglu .innerHTML =res.profile.nickname;
                photo_p.querySelector('img').src =res.profile.avatarUrl;
                out.innerHTML ='注销';
              }
            else{
              alert('用户不存在')
            }
            } else {
              console.log('请求失败');
            }
          }
        };
        dhr.send();
    }

    
    
   
    


   
   

      
    
       


       







   











