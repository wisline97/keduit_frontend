'''
	[문제]
		(1) 랜덤(1 ~ 9) 사이의 랜덤값을 4개를 저장 후 비교한다. 
		(2) 4개의 랜덤값이 모두 홀수이면 1을 total에 추가,
			하나라도 홀수가 아니면 2를 total에 추가한다.
		(3) (1~2)를 5번 반복한다. 

		[예시] 
			[3, 1, 5, 1] 모두홀수 => total = [1]
			[5, 2, 1, 4] 모두홀수x => total = [1,2]
			...
'''
total = []
import random

for y in range(5):
	for i in range(4):
		check = True
		num = random.randint(1,9)
		print(num)
		if num%2 == 0:
			check = False
			break

	print("최종 check 값",check)
	if check == True:
		total.append(1)
	elif check == False:
		total.append(2)
	print(total)
