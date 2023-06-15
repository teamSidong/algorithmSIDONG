
꼬리문자열
https://school.programmers.co.kr/learn/courses/30/lessons/181841

```
function solution(str_list, ex) {
    var answer = '';
    str_list.forEach((elem) => {
        if(!elem.includes(ex)){
            answer = answer + elem;
        }
});
    return answer;
}
```


삼총사
https://school.programmers.co.kr/learn/courses/30/lessons/131705
```
function solution(l, r) {
    var answer = [];
    
    var minLen = (l+"").length;
    var maxLen = (r+"").length;
    
    //최소값의 길이가 1인 경우 최소값은 0이여야함
    var minVal = minLen > 1 ? Math.pow(10, minLen-1) * 5 : 0;
    //최대 길이의 최소값
    var maxVal = Math.pow(10, maxLen-1) * 5;
    //최대 길이의 최대값
    var maxxVal = "";
    var num = 0;
    while(num <maxLen){ 
        num++;
        maxxVal = maxxVal + "1";
    }
    maxxVal = parseInt(maxxVal);
    maxxVal = maxxVal*5;
    
    
    if(minLen == maxLen){
        if(r < minVal){ //r이 최소값보다 작을경우
            answer.push(-1);
            return answer
        }
    }
    
    var round = minLen;
    while(round < maxLen){ 
        var mx = Math.pow(10, round)*5;
        
        for(let i=0; i<round; i++){
            var dum = Math.pow(10, i)*5;
            answer.push(mx+dum);
        }
        
        answer.push(mx);
        
        round++;

    }
    
    

    
    if(l <= 5){
        answer.push(5)
    }
    
    
    answer.sort(function(a, b)  {
        return a - b;
    });

    
    return answer;
}
```
