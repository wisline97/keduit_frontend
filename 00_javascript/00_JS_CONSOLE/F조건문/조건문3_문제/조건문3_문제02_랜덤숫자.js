/*
        [문제추가]
            랜덤으로 숫자 1이나 7을 출력 
    */
const num = parseInt(Math.random()*7)+1

if(num == 1 || num == 7){
    console.log(num)
} else{
    console.log("랜덤숫자가 1이나 7이 아닙니다.")
}