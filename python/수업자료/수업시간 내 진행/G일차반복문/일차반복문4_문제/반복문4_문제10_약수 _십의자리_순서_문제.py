'''
	[문제]
	  	1980의 약수 중에서 순서대로 약수를 출력했을 때, 
        십의자리가 3인 두 번째 약수를 출력하시오.
	[정답]
		33
'''

max = 1980
num= 1
run = 1
count = 0

while run == 1:
	if max%num == 0:
		if num%100 // 10 == 3:
			count += 1
			if count == 2:
				print(num)
				run = 0
	num += 1