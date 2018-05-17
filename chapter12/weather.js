    // API 요청 url 변수
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=seoul&APPID=caea794f99d13e54c746012ecfb21c8c';
  
    
    $.getJSON(url, function(data){
      // 날씨 data
      var sys = data.sys;                 //국가명, 일출/일몰
      var city = data.name;               // 도시명
      var weather = data.weather;         // 날씨 객체
      var main = data.main;               // 온도, 기압 관련 객체

      var weatherMain = weather[0].main;  // 구름 상태(Cloudiness)
      var weatherId = weather[0].id;      // 날씨 상태 id 코드
      var icon = weather[0].icon;         // 날씨 아이콘 정보
      var country = sys.country;          // 국가명
      var temp = main.temp;               // 현재 온도
      var tempMin = main.temp_min;        // 최저 온도
      var tempMax = main.temp_max;        // 최고 온도

      // 날씨 정보 표기
      // $('.weather-id').append( weatherMain + ', ' + icon + ' '
      //   + '현재 온도: ' + parseInt(temp-273.15) + ' '
      //   + '최저 온도: ' + parseInt(tempMin-273.15) + ' '
      //   + '최고 온도: ' + parseInt(tempMax-273.15) + ' '
      //   + country + ' ' + city + ' ' + weatherId + ' ' + '<br>');

      var iconUrl = 'http://openweathermap.org/img/w/' + icon;
      
      // 날씨 정보 표시
      $('.weather-info .city').html(city + '/' + country);
      $('.weather-info .icon').append('<img src="' + iconUrl + '.png">');
      $('.weather-info .weather-id').append(weatherMain);
      $('.weather-info .temp-min').html(parseInt(tempMin - 273.15) + '&deg;' + ' min');
      $('.weather-info .temp-max').html(parseInt(tempMax - 273.15) + '&deg;' + ' max');
      $('.weather-info .temp').html(parseInt(tempMax - 273.15) + '&deg;');

      $('.loading').hide();
      
    
    }).fail(function(){
      alert('loading error');
    });