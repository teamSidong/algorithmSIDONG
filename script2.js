function solution(s) {
    let mid = s.length/2; //mid를 미리 구해놓기
    if(s.length % 2 !== 0)
     return s[Math.floor(mid)];//배열에서 가운데 숫자구하기
    else 
     return s.slice(mid - 1, mid + 1);//내가 원하는 값을 뽑아서 배열에 넣기
 }

 solution("abcde");