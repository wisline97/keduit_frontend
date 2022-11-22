'''
	[문제]
		아래와 같이 삼각형을 출력하시오.
	[예시]
		1 2
		1 2 3 4
		1 2 3 4 5 6
		1 2 3 4 5 6 7 8
'''

for i in range(4):
	l = 1
	for j in range(i+1):
		print(l,l+1, end=" ")
		l+=2
	print()