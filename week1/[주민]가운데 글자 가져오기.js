function solution(s) {
    var answer = '';
    
    var length = s.length();
    var index = length/2;
        
    answer = (length%2==0) ? s.substring(index-1, index+1)+"" : ""+s.substring(index, index+1);
    
    return answer;
}