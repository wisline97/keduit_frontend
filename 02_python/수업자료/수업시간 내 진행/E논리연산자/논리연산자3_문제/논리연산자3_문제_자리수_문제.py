'''	
	[문제] 
		아래 변수의 a값이 
	  	100의 자리가 3이고 10의 자리가 4이면,
	  	True 출력하시오.
	[정답]
		False
'''
a = 3640

a_100의자리 = a % 1000 // 100
a_10의자리 = a % 100 // 10

print(a_100의자리 == 3 and a_10의자리 == 4)