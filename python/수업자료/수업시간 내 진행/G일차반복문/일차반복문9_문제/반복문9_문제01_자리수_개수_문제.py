'''
[문제]
	10000~99999 사이의 랜덤숫자를 저장하고 
	자리별숫자가 5 이상인 개수를 출력하시오.
	
		예) 19200 ==> 9 하나만 5 이상 ==> 1
		예) 98436 ==> 9,8,6, 세 개가 5 이상 ==> 3
'''

import random

randnum = random.randint(10000,99999)
count = 0
i = 1

만 = randnum // 10000
천 = randnum % 10000 // 1000
백 = randnum % 1000 // 100
십 = randnum % 100 // 10
일 = randnum % 10

print(만, 천, 백, 십, 일)

'''
while i < 10:
	if randnum // 만 >= 5:
		count += 1
	if randnum % 만 // 천 >= 5:
		count += 1
	if randnum % 천 // 백 >= 5:
		count += 1
	if randnum % 백 // 십 >= 5:
		count += 1
	if randnum % 십 >= 5:
		count += 1
	i += 1
'''

while i == 1:
	if 만 >= 5:
		count += 1
	if 천 >= 5:
		count += 1
	if 백 >= 5:
		count += 1
	if 십 >= 5:
		count += 1
	if 일 >= 5:
		count += 1
	i = 0


print("랜덤숫자는",randnum)
print("자리별 숫자가 5이상인 개수는",count,"개 입니다.")