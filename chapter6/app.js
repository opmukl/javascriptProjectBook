// 변수 선언
var inp = document.forms['cal'];
var input = inp.getElementsByTagName('input');
var clsBtn = document.getElementsByClassName('cls-btn')[0]; 
var resultBtn = document.getElementsByClassName('result-btn')[0]; 
var inpResult = inp['result'];

// 계산기 초기화
function clr(clear){
  inpResult.value = 0;
}

// 계산기 입력 처리 함수
function calc(value){
  // 입력이 들어가면 0을 지움
  if(inpResult.value == 0){
    inpResult.value = '';
  }

  // 입력 값을 결과 창에 출력
  inpResult.value += value;
}

// 계산 결과 처리 함수
function myResult(){
  var result = document.forms['cal']['result'];
  var calc = eval(result.value);

  // 결과창에 표시
  inpResult.value = calc;
}

// 이벤트 핸들러
// --------------------------------------
// 숫자 및 사칙 연산 버튼
for(var i = 0; i <input.length; i++){
  // 숫자와 사칙 연산자만 입력 처리
  if(input[i].value != '=' && input[i].value != 'clear'){
    input[i].onclick = function(){
      calc(this.value);
    }
  }
}

// 초기화 버튼
clsBtn.onclick = function(){
  clr();
}

// 결과버튼
resultBtn.onclick = function(){
  try {
    myResult();
  }
  catch(err){
    var result = inpResult;
    result.value = '입력 오류';
  }
}