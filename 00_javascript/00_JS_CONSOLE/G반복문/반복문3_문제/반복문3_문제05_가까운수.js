/*
 * [문제]
 * 	 	100의 약수중에서 50에 가장 가까운수를 구하시오.
 */
let max = 100
let i = 1
while(true){
    if(max%i == 0){
        if(i<60 && i>40){
        console.log(i)
        break
    }
    }
    i += 1
}