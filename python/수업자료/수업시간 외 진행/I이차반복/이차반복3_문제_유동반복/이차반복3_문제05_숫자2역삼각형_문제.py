'''
	[문제]
		아래와 같이 삼각형을 출력하시오.
	[예시]
		123123
		12312
		1231
		123
		12
		1
'''
max = 6

for i in range(max):
	count = 0
	for j in range(max-i):
		if count > 2:
			count = 0
		count += 1
		print(count,end="")
	print()
