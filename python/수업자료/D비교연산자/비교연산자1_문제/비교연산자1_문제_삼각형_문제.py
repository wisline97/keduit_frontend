'''
	[문제]
		가로가 3이고 세로가 6인 
        삼각형 넓이가 홀수인지 구하시오.
		위내용을 비교연산자로 표현하시오.
    [정답]
        True
'''

width = 3
height = 6
tri = 0.5 * (width*height)
print(tri%2 == 1)
