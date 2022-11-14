function solution(before, after) {
    let arr1 = before.split("").sort().join(',');
    let arr2 = after.split("").sort().join(',');
    
    if(arr1==arr2){
        return 1;
    }else{
        return 0;
    }
    }
    
