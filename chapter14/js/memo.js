$(function(){
  // 메모장
  var $stickyWrap = $('.sticky-wrap');  
  var stickyHtml = 
    '<div class="sticky">' +
      '<nav class="top-nav clearfix">' +
        '<div class="icon-box-l">' +
          '<button class="btn-add"><i class="fa fa-plus"></i></button>' +
          '<button class="btn-save"><i class="fa fa-floppy-o"></i></button>' +
        '</div>' +
        '<div class="icon-box-r">' + 
          '<button class="btn-get"><i class="fa fa-list"></i></button>' +
          '<button class="btn-del"><i class="fa fa-times"></i></button>' +
        '</div>' +
      '</nav>' +
      '<textarea name="txt" class="txt"></textarea>' +
      '<nav class="side-nav"><ul></ul></nav>'
    '</div>';


    // *===============================*
    // 메모장 초기화
    // *===============================*
    $stickyWrap.append(stickyHtml);    

    // *===============================*
    // 메모 객체
    // *===============================*
    var Sticky = {
      // 메모 추가 메서드
      add: function(){
        // 창 크기를 구함
        var winW = $stickyWrap.width() - 250,
            winH = $stickyWrap.height() - 300,
            x = Math.random() * winW,
            y = Math.random() * winH;

        $stickyWrap.append(stickyHtml);
        var $newSticky = $('.sticky').last();
        
        $('.sticky').css('zIndex', '0');
        $newSticky.css({
          'top': y,
          'left': parseInt(x) + 'px',
          'zIndex': '99'
        })
      },

      // 메모 저장 메서드
      save : function(currentMemo){
        var savedMemoLength = localStorage.length,
            writingMemoText = currentMemo.val();
        
        // 작성된 글이 있으면 저장
        if(savedMemoLength !== 0){
          var key = prompt('저장할 파일명?', ' ');
          localStorage.setItem(key, writingMemoText);
        } else {
          alert('내용을 입력해주세요.')
        }
      },

      // 메모 목록 및 읽기 메서드
      get : function(currentMemo){
        var textCotents,
            savedMemoLength = localStorage.length, // 총 스토리지 길이
            deleteIcon = '<i class="btn-del-storage fa fa-trash"></i>'; // 삭제 아이콘
      
          currentMemo.find('ul').empty();
          currentMemo.toggleClass('is-active');
          
          for(var i = 0; i < savedMemoLength; i++){
            textCotents = localStorage.key(i);
            currentMemo.find('ul').append('<li>' + textCotents + deleteIcon + '</li>');
          }

          // 목록 클릭 시 메모 읽어 오기
          currentMemo.find('li').click(function(){
            var selectdMemoName = $(this).text();
            var selectdMemoText = localStorage.getItem(selectdMemoName);
            console.log(selectdMemoText);

            currentMemo.toggleClass('is-active');
            currentMemo.prev('.txt').val(selectdMemoText);
          });

          // 목록 삭제 버튼
          currentMemo.find('.btn-del-storage').click(function(){
            var key = $(this).parent().text();
            var delConfirm = confirm('해당 메모를 삭제할까요?');

            if(delConfirm) localStorage.removeItem(key);
          })

        }
    }; // end Sticky{}

    // 추가 버튼
    $stickyWrap.on('click', '.btn-add', function(){
      Sticky.add();
    });

    // 저장 버튼
    $stickyWrap.on('click', '.btn-save', function(){
      var currentMemo = $(this).parents().siblings('.txt'); 
      Sticky.save(currentMemo);
    });

    // 목록 보기 버튼
    $stickyWrap.on('click', '.btn-get', function(){
      var currentMemo = $(this).parents('.top-nav').siblings('.side-nav');
      Sticky.get(currentMemo);
    })

    // 메모 닫기 버튼
    $stickyWrap.on('click', '.btn-del', function(){
      var currentMemo = $(this).parents('.sticky').remove();
    })

    // 상단 네비 드래그 활성화
    $stickyWrap.on('mouseover', '.top-nav', function(){
      $(this).parent().draggable();
    })

    // 터치 입력
    $stickyWrap.on('touchstart mousedown', '.sticky', function(){
      $('.sticky').css('zIndex', '0');
      $(this).css('zIndex', '99');
    })
    $stickyWrap.on('touchmove', '.top-nav', function(e){
      var $sticky = $(this).parent();
      var event = e.originalEvent;
      var touchObj = event.changedTouches[0];

      var x = pareseInt(touchObj.clientX),
          y = pareseInt(touchObj.clientY)
          ex = x - 125,
          ey = y -16;

      $sticky.css({
        'left': ex + 'px',
        'top': ey + 'px'
      });
    })

})



// $('#txt').val('글상자 영역의 색상 값을 저장합니다.');

// $('#textColor').change(function(){
//   var color = $(this).val();
//   $('#txt').css('color', color);
// })

// $('#bgColor').change(function(){
//   var color = $(this).val();
//   $('#txt').css('backgroundColor', color);
// });

// $('#setColor').click(function(){
//   var bgColor = $('#bgColor').val();
//   var textColor = $('#textColor').val();
//   var obj = {
//     bgcolor : bgcolor,
//     textcolor : textcolor
//   }

//   // 색상 설정 객체를 저장
//   localStorage.setItem('color', JSON.stringifty(obj));
// })

// $('#getColor').click(function(){
//   // var bgColor = localStorage.getItem('bgColor');
//   // var textColor = localStorage.getItem('textColor');
//   var color = JSON.parese(localStorage.getItem('color'));
  
//   $('#txt').css({
//     'backgroundColor' : bgColor,
//     'color' : textColor
//   });

// });