'''
	[문제]
		2~100 사이의 랜덤 숫자 하나를 저장하고, 
		2부터 그 숫자 사이의 모든 소수의 개수를 출력하시오.

	[예시]
		r = 20
	 	소수 = 2, 3, 5, 7, 11, 13, 17, 19
		개수 = 8
'''
import random

num = random.randint(2,100)
a=[]

print(num)

while True:
	count = 0
	for i in range(num):
		if num % (i+1) == 0:
			약수 = i+1
			print(num,"의 약수는",약수)
			count += 1


	if count == 2:
		a.append(약수)
	num -= 1

	if num < 1:
		break

print(a)

print(len(a),"개")