function solution(n) {
    var answer = 0;
    
    for(let i = 1 ; i <= Math.sqrt(n) ; i++){
        if(n % i === 0) {
            answer = answer + i;
            if(n / i != i){
                answer = answer+(n / i);
            } 
        }
    }
    

    return answer;
}