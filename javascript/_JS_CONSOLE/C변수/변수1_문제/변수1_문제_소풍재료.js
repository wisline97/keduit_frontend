/*
	[문제] 
		소풍재료를 위해 김밥재료를 구입하려고한다. 
   		김밥재료로는 햄과 계란 당근이 필요하다.
   		햄 1개 의 가격은 2500원 이고 총 4개 필요하다.
   		계란한판은 3000원 이고 총 2판 필요하다.
   		당근 1개의 가격은 2000원 이고 총 8개가 필요하다.
   		집에 냉장고를 열어봤더니 당근이 2개 햄이 1개 있었다. 
   		철수가 모자른 재료를 사는데 필요한 총금액을 구하시오. 
   		
   	[정답] 
   		25500
 */

let refrigeratorHam = 1;
let refrigeratorCarrot = 2;

let ham = 2500;
let hamNeed = 4 - refrigeratorHam;

let egg = 3000;
let eggNeed = 2;

let carrot = 2000;
let carrotNeed = 8 - refrigeratorCarrot;

let total = ham * hamNeed + egg * eggNeed + carrot * carrotNeed;

console.log(total, "원");
