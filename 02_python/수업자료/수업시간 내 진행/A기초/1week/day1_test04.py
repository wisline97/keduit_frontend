# 연산자(operator)

# 산술 연산자 종류 (6가지)

# 1) 더하기            +
# 2) 빼기              -
# 3) 곱하기            *
# 4) 나누기            /   
# 5) 나누기(몫)        //
# 6) 나누기(나머지)    %


print(10 + 3) # 더하기
print(10 - 3) # 빼기
print(10 * 3) # 곱하기
print(10 / 3) # 나누기(소수점이 생길수있다.) 
# 컴퓨터는 실수를 정확히 계산할 수 없다. 
# 적당한 선에서 반올림을해 소수점을 표현한다.
print(10 // 3) # 몫 (소수점이 제거된다.)
print(12 % 8) # 나머지 (몫을제거한 나머지.)

#----------------------------------------------------

# 우선순위

"""

	1. 곱하기와 나누기등은  더하기 빼기 보다 우선순위가 높다. 
	2. 더하기나 빼기를  곱하기 또는 나누기등 보다 먼저 계산할때는 
	() 소괄호 를 이용해야 한다. 	 	 
	
	[예]
		10 + 3 * 3    	: 19
		(10 + 3) * 3 	: 39
	
	3. 우선순위표
		[1순위]  ()
		[2순위]  *  /  // % (동급)
		[3순위]  +  -
"""


print(10 + 3 * 3) # 19
print((10 + 3) * 3) # 39

#----------------------------------------------------

# 소수점 제한 명령어 
 
# 반올림 : round
# round( 실수 , 자리수 )
print("실수연산 : " , 10 / 3)
print("실수연산(round) 자리수한자리 : " , round(10 / 3 , 1)) 

print("실수연산(round) 자리수두자리 : " , round(10 / 3 , 2)) 


print("---------------------------------------")
print("실수연산 : " , 10.3 + 2.3)
print("실수연산(round) : " , round(10.3 + 2.3, 1))

#----------------------------------------------------

'''
	[문제]	  	
		철수는 현금 10000원을 가지고있다. 
		편의점에가서 과자를 구입하려고 한다. 		  	
		가격이 1200원인 과자 3개와 
		가격이 1900원인 음료수 1개를 구입하였다.
		거스름돈을 구하시오.
	[정답] 
		4500

'''

print(10000 - (1200 * 3 + 1900))
