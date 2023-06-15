
#꼬리문자열#
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
