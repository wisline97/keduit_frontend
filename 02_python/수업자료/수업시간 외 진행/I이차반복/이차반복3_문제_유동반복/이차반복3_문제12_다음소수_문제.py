'''
	[문제]
		2~1000 사이의 랜덤 숫자 하나를 저장한다.
		위 숫자 바로 다음 소수를 출력하시오.
	
	[예시1]
		r = 1000
		소수 = 1009	 
	[예시2]
		r = 500
	    소수 = 503
'''

import random

num1 = random.randint(2,1000)
print(num1)
num2 = num1+1

while True:
	count = 0
	print(num2,"가 소수인지 아닌지 판별합니다.")
	for y in range(num2):
		if num2 % (y+1) == 0 :
			print(num2,"의 약수는",y+1,"입니다.")
			count += 1

	if count == 2:
		print(num2,"는 소수입니다.")
		break
	else:
		print("현재",num2,"는 소수가 아닙니다.")
		print("현재",num2,"에 1을 더합니다.")
		num2 += 1
		