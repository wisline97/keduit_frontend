'''
	[문제]
	    18의 약수를 출력하시오.
	[정답]
		1
		2
		3
		6
		9
		18
'''

num = 1
max = 18
while num <= max:
	if max % num == 0:
		print(num)
	num += 1