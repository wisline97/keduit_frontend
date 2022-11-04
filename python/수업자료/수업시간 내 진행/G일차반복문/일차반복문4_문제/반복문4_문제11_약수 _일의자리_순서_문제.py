'''
	[문제]
	  	120의 약수 중에서 순서대로 약수를 출력했을 때, 
        일의자리가 4인 두 번째 약수를 출력하시오.
	[정답]
		24
'''

max = 120
num= 1
run = 1
count = 0

while run == 1:
	if max%num == 0:
		if num%10 == 4:
			count += 1
			if count == 2:
				print(num)
				run = 0
	num += 1