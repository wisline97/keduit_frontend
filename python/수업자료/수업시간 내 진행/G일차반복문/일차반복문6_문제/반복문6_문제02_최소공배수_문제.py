'''
[문제] 
	45와 60, 75의 최소공배수를 구하시오.
[정답]
	900
'''

num = 1
max = 75
min = 45
mid = 60

run = 1

while run == 1:
	if num % max == 0 and num % mid == 0 and num % min == 0:
		print(num)
		run = 0
	num += 1