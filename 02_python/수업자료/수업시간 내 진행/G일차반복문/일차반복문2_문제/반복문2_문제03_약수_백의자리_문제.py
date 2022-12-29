'''
	[문제]
	  	1980의 약수 중에서 순서대로 약수를 출력했을 때, 
        백의자리가 4인 약수들만 출력하시오.
	[정답]
		495
'''

num = 1
max = 1980

while num <= max :
	if max % num == 0 and num % 1000 // 100 == 4:
		print(num)
	num += 1
