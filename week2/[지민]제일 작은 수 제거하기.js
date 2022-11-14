function solution(before, after) {
    var answer = 0;
    let arr1 = [before].sort();
    let arr2 = [after].sort();
    if(arr1==arr2){
        return answer=1 
    }else{
        return answer =0
    }
    return answer;
    
    console.log(arr1);
    console.log(arr2);
}