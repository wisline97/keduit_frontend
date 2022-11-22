'''
	[문제]
		아래와 같이 삼각형을 출력하시오.
	[예시]
		1 2 3 4 5 6 7
		2 3 4 5 6 7
		3 4 5 6 7
		4 5 6 7
		5 6 7
		6 7
		7
'''
max = 7
for i in range(max):
	num = 1
	num += i
	for j in range(max-i):
		print(num, end=" ")
		num += 1
	print()