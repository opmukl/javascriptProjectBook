function calendar(newYear, newMonth){
  // 특전 연월을 시작일부터 조회
  var d = new Date(newYear, newMonth-1, 1),
    // 월별 일수 구하기(공식 - new Date(연, 월 32))
    dLength = 32 - new Date(newYear, newMonth-1, 32).getDate(),
    year = d.getFullYear(),
    month = d.getMonth(),
    date = d.getDate(),
    day = d.getDay();

  // caption에 날짜 표시
  var captionYear = document.querySelector('.year'),
      captionMonth = document.querySelector('.month');

  // 달력 표시될 영역
  var monthDates = document.querySelectorAll('tr td');

  // 달력 초기화
  for(var i=0; i<monthDates.length; i++){
    monthDates[i].innerHTML = '';
  }

  // 달력에 날짜 표시
  for(var i = day; i< day + dLength; i++){
    monthDates[i].innerHTML = date;
    date++;
  }

  captionYear.innerHTML = year;
  captionMonth.innerHTML = month+1;
}

(function(){
  var btnPrevMonth = document.querySelector('.btn-prev-month'),
      btnNextMonth = document.querySelector('.btn-next-month'),
      year = new Date().getFullYear(),
      month = new Date().getMonth() + 1;

  calendar(year, month);

  btnPrevMonth.onclick = function(){
    calendar(year, --month);
  }

  btnNextMonth.onclick = function(){
    calendar(year, ++month);
  }
})();
