
function addAnswer(order, num){
    var answer = 0;
    var pos = order.indexOf(num);   //order문자열에서 num문자열이 있는 index
    while (pos !== -1) {            //내가 찾는 문자열의 인덱스가 있을때
        answer++;
        pos = order.indexOf(num, pos + 1); //이후 인덱스부터 다시 검색
    }
    
    return answer;
}

function solution(order) {
    var answer = 0;
    order = order+"";
    
    answer = answer+addAnswer(order, 3);
    answer = answer+addAnswer(order, 6);
    answer = answer+addAnswer(order, 9);
    
    return answer;
}