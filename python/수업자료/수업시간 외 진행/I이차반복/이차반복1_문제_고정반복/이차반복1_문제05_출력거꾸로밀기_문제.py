'''
	[문제]
		3~6 사이의 랜덤 숫자 하나를 저장하고 그 숫자만큼 아래와 같은 규칙으로 출력하시오.
		단, 일차 반복문과 이차 반복문으로 출력하시오.
 	[예시]
		r = 6
	[출력]
		3 2 1
		4 3 2
		5 4 3
		6 5 4
'''


import random

num = random.randint(3,6)

print("랜덤넘버:",num)

count = 0

for i in range(num):
	count += 1
	print(count+2,count+1,count)