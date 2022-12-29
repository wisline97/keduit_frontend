'''
	[문제] 
		9의 배수 중 일의 자리가 6인 
		첫 번째 배수를 출력하시오.
	[정답]
 		36
'''

num = 1
run = 1

while run == 1 :
	if num % 9  == 0 and num%10 == 6:
		print(num)
		run = 0
	num += 1


