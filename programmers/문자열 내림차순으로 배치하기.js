function solution(s) {
    var answer = '';
    answer = s.split('').sort((a,b)=> {
        if(a>b) return -1;
        else if (a<b) return 1;
        else return 0;
    }).join('');
    return answer;
}