'''
	[문제] 
		100의 약수 중에서 
        5번째 약수에서 2번째 약수를 뺀 값을 구하시오.
	[정답]
		8
'''

num = 1
max = 100
run = 1

num2 = 0
num5 = 0


count = 0

while run == 1:
	if max%num == 0:
		count += 1
		if count == 2:
			num2 = num
		
		if count == 5:
			num5 = num
			print(num5-num2)
			run = 0
	num += 1

