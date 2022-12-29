'''
	[문제]
		아래와 같이 삼각형을 출력하시오.
	[예시]
		1
		1 2
		1 2 3
		1 2 3 1
		1 2 3 1 2
		1 2 3 1 2 3
		1 2 3 1 2 3 1
		1 2 3 1 2 3 1 2
		1 2 3 1 2 3 1 2 3
		1 2 3 1 2 3 1 2 3 1
'''
for i in range(10):
	count = 0
	for j in range(i+1):
		count += 1
		if count > 3:
			count = 1
		print(count, end =" ")
	print()