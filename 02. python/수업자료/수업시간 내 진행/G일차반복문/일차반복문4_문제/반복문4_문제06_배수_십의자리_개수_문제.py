'''
	[문제] 
	   	1000보다 큰 수중에서 8의 배수를 검색하고, 
     	십의자리가 5인 배수를
		가장 작은 수부터 차례대로 4개를 출력하시오.
	[정답]
		1056 1152 1256 1352 
'''

num = 1000
run = 1
count = 0

while run == 1:
	if num % 8 == 0 and num%100 // 10 == 5:
		count += 1
		print(num)
		if count == 4:
			run = 0
	num += 1
