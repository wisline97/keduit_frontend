// 0~9 ASCII 코드 48~57

/*my_string[i]*/

var char = "hi12392";
var answer = "";

for(i=0; i<char.length; i++){
    if(char.charCodeAt(i) >= 48 && char.charCodeAt(i)<58){
        answer += char[i];
    };
};

answer = answer.split("")
console.log(answer)
console.log(answer)

answer.sort(function(a,b){
    return a-b;
})

