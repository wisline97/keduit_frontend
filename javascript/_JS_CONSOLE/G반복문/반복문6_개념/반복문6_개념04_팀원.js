/*
	[문제]
		철수네반은 여학생 16명과 남학생 20명으로 구성되어있다. 
		팀을 나눠서 조별과제를 하려고한다. 
		각팀당 여학생과 남학생수를 똑같이 구성하고,
		최대한 많은팀을 만들때 몇팀을 만들수있는지 구하시오. 
 */
let max1 = 16
let max2 = 20

let 최소공배수 = max2

for (i = 1; i <= max2; i++) {
	if (max1 % i == 0 && max2 % i == 0) {

		if (최소공배수 > i) {

			최소공배수 = i
		}
	}
}

console.log(최소공배수, "명씩 넣으면")
console.log(max1 / 최소공배수, "팀")