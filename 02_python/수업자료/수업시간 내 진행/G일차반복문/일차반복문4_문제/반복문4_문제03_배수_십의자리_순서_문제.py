'''
	[문제] 
		9의 배수 중 십의 자리가 6인 
		다섯 번째 배수를 출력하시오.
	[정답]
		369
'''

num = 1
run = 1

count = 0

while run == 1:
	if num%9==0 and num%10 == 6:
		count += 1
	if count == 5 :
		print(num)
		run = 0
	num += 1