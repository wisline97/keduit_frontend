'''
[문제]
	[1] 1~99 사이의 랜덤 숫자를 저장한다.
	
	랜덤 숫자 중에서 3이나 6이나 9의 개수가
	[2-1] 2개이면, 짝짝을 출력한다.
	[2-2] 1개이면, 짝을 출력한다.
	[2-3] 0개이면, 해당 숫자를 출력하시오.
	
	[예]
		33	==> 짝짝
		16	==> 짝
		 7	==> 7
'''

import random

num = random.randint(1, 99)


num10 = num // 10
num1 = num % 10

print(num)

count = 0

if num10 == 3 or num10 == 6 or num10 == 9:
	count += 1
if num1 == 3 or num1 == 6 or num1 == 9:
	count += 1

if count == 1 :
	print("짝")

if count == 2 :
	print("짝짝")

if count == 0 :
	print(num)

