/*
	  	[else 사용시 조심할점.]		  			  			  	
	  	else 는  바로 위의 if 와 연결되기 때문에 
	  	조건이 여러개인경우 올바르게 작동하지않는다. 			
		------------------------------------------------------		
		아래 내용은 "자판기" 예시이다.
		1~3번을 입력하면 주문이 적용되고 
		1~3을 제외한 다른번호를 입력하면 "오류" 를 출력 하기위서 작성하였지만
		else 는 if 한개만 연결되기때문에 결과가 이상하게나온다. 	

		[정리]
			즉, if 와 else 는 조건이 두가지 일때문 사용할수있다. 
		
		*/

System.out.println("자판기 : [1.과자 2.음료수 3.라면]");
System.out.println("번호를 입력하세요 : ");
var select = 1;
System.out.println("선택한 번호 : " + select);
if (select == 1) {
  System.out.println("1.과자");
}
if (select == 2) {
  System.out.println("2.음료수");
}
if (select == 3) {
  System.out.println("3.라면");
} else {
  System.out.println("[오류]");
} // select가 3이아니면
