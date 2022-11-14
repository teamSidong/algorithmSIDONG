function solution(order) {
    var answer = 0;
    const arr = order.toString();
    for(let i =0; i<=arr.length; i++){
        if(order1[i]/3==0){
            return answer++;
        }
    }
document.write.solution(order1);    
    return answer;
}

function solution(order) {
    
    var answer = 0;
    const arr = order.toString();
    for(let i =0; i<=arr.length; i++){
        if(arr[i]==3 || arr[i]==6||arr[i]==9){
            answer++;
        }
    }
    return answer;
}