// 0~9 ASCII 코드 48~57

/*my_string[i]*/

// var char = "hi12392";
// var answer = "";

// for(i=0; i<char.length; i++){
//     if(char.charCodeAt(i) >= 48 && char.charCodeAt(i)<58){
//         answer += char[i];
//     };
// };

// answer = answer.split("")
// console.log(answer)
// console.log(answer)

// answer.sort(function(a,b){
//     return a-b;
// })



// 스킬체크 1레벨 문제 2번 20점 맞은 코드

function solution(n, lost, reserve) {
    var answer = 0;
    var stdArr = [];
    //학생들의 체육복 소유 현황 체크
    for(i=0; i<n; i++){
        stdArr[i] = 1;
    };
    console.log(stdArr);
    for(i=0; i<lost.length; i++){
        stdArr[lost[i]-1] -= 1;
    }
    for(i=0; i<reserve.length; i++){
        stdArr[reserve[i]-1] += 1;
    };
    console.log(stdArr);

    //체육복 빌려주는 반복문
    for(i=0; i<stdArr.length; i++){
        if(i+1 < stdArr.length && stdArr[i] == 2 && stdArr[i+1] == 0){
            stdArr[i] -= 1
            stdArr[i+1] += 1
        } else if(stdArr[i] == 0 && stdArr[i+1] == 2){
            stdArr[i] += 1
            stdArr[i+1] -= 1
        }
    };
    console.log(stdArr);


    //정답 추출하는 반복문
    for(i=0; i<stdArr.length; i++){
        if(stdArr[i] > 0){
            answer += 1
        }
    }
    console.log("정답은",answer);
    return answer;
}

var n = 4;
var lost = [1,4];
var reserve = [2,3];


// // 스킬체크 1레벨 문제 2번 34점 맞은 코드
// function solution(n, lost, reserve) {
//     var answer = n-lost.length;
//     for(i=0; i<lost.length; i++){
//         for(y=0; y<reserve.length; y++){
//             if(lost[i] - 1 == reserve[y] || lost[i] + 1 == reserve[y]){
//                 reserve[y] = NaN
//                 answer += 1;
//                 break
//             };
//         }
//     };
//     console.log("정답은",answer);
//     return answer;
// }

solution(n, lost, reserve);