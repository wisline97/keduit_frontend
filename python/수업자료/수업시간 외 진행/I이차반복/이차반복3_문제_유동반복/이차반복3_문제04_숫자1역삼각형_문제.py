'''
	[문제]
		아래와 같이 삼각형을 출력하시오.
	[예시]
		12345
		1234
		123
		12
		1
'''

max = 5

for i in range(max):
	for j in range(max-i):
		print(j+1,end="")
	print()