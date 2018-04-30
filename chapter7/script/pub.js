var indicator = document.querySelectorAll('.indicator button');
var lightbox = document.querySelector('#lightbox');
var dimm = document.querySelector('#dimm');


var imgThumbs = document.querySelectorAll('.img-thumb li');


// 라이트 박스 표시
function lightboxOpen(num){
  lightbox.setAttribute('class','active');    
  dimm.setAttribute('class','active');    
  changeImg(num);
  indicator[num-1].focus();
}

// 라이트 박스 닫기
function lightboxClose(){
  lightbox.removeAttribute('active')
  dimm.removeAttribute('active')
}

function changeImg(val){
    var imgs = document.querySelectorAll('figure > img');
    for(var i=0; i<imgs.length; i++){
      imgs[i].removeAttribute('class');
    }
    console.log(val)
    imgs[val-1].setAttribute('class','active');  
}


// console.log(imgThumb.length)
window.onload = function(){

  console.log( imgThumbs[0])
  // imgThumbs.addEventListener('click', openPop());


  for (var i = 0, i = imgThumbs.length; i++;){
    imgThumbs[i].onclick = function(){
      console.log(index);
    }   
  }

  // function openPop(){
  //   console.log(this.index());

  // };

}

