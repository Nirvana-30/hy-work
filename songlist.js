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


  function setheight(){
    var songlist =document.getElementById('songlist');
    songlist.style.overflow="auto";
  }
  setheight();
  var box = document.getElementById("photos");
  const xhr = new XMLHttpRequest();

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


    




  