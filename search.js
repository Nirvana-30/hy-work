function getKey(event){
    event = event || window.event;
    if (event.keyCode == 13) {
        var search_inp =document.getElementById('search-inp').value;
        const hhr = new XMLHttpRequest();
    
    hhr.open('get', 'http://sandyz.ink:3000/search?keywords='+search_inp+'',true);
    
    hhr.onreadystatechange = () => {
    if (hhr.readyState === 4) {
      if ((hhr.status >= 200 && hhr.status < 300) || hhr.status == 304) {
        const res = JSON.parse(hhr.responseText);
        var search_result =document.getElementById('search-result');
        console.log(res);
        console.log('请求成功');
        const data = [];
          const renderData =data.map(value => {
            return`<div>${value}</div>`
          })
          search_result.innerHTML =renderData.join('');
        res.result.songs.forEach(element => {
          function format_time(second){
            second=parseInt(second);
            var minute = 0;
            var hour = 0;
            if(second>60){
              minute = parseInt(second/60);
              second = parseInt(second%60);
            }
            if (minute >60){
              hour = parseInt(minute/60);
              minute = parseInt(minute%60);
            }
          }
          var duration =format_time(element.duration)
          search_result.insertAdjacentHTML('beforeEnd',`
          <div  id='search-li'>
          <a></a>
          <div class="a">${element.name}</div>
          <div class="b">${element.artists[0].name}</div>
          <div class="c">${element.album.name}</div>
          <div class="d">${duration}</div>
          </div>`);
          
      });

      } else {
        console.log('请求失败');
      }
    }
    };
    hhr.send();
     
    }
  }