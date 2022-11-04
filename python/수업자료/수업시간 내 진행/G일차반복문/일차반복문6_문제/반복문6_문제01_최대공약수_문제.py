'''
	[문제] 
		45와 60, 75의 최대공약수를 구하시오.
	[정답]
		15
'''

num = 100
max = 75
min = 45
mid = 60

run = 1

while run == 1:
	if max % num == 0 and min % num == 0 and mid % num == 0:
		print(num)
		run = 0
	num -= 1