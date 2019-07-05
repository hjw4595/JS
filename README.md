# JS
페이지 렌더링에 직결되는 스크립트는 바디 마지막
로딩문제가 없는 스크립트, 라이브러리 스크립트는 헤더

DOM 접근 
document.getElementByID("")
`hello ${name} your ${age}`   띄어쓰기 까지 적용됨 ``
"hello" + name + "your" + age 문자열 더하기라 띄어쓰기 적용 안됨 "" , ''

함수 형태
const name = {
  plus: function(first, second){
   retrun "first" + "second"
   }
}
const pluse = name.plus(a, b)


modified:   contents (modified content, untracked content) 에러
