'''
	[문제] 
		[1] 100 이상의 숫자 중에서  
			7의 배수를 순차적으로 검색한다.
		[2] 작은 수부터 순차적으로 다섯 개를 출력하시오.
	[정답]
		105 112 119 126 133 
'''

num = 100
count = 0
run = 1

while run == 1:
	if num%7 == 0 :
		print(num)
		count += 1
		
		if count == 5 :
			run = 0


	num += 1