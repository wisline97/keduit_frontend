'''
	[문제]
		이번 달 1일이 수요일이라고 할 때, 
		랜덤으로 1~31을 저장하고 해당 요일을 출력하시오.

		[예]
		3일 ==> 금요일
'''

import random

num = random.randint(1, 31)
요일 = num % 7

print(num,요일)

if 요일 == 1 :
	print(num,"일은 수요일입니다.")

if 요일 == 2 :
	print(num,"일은 목요일입니다.")

if 요일 == 3 :
	print(num,"일은 금요일입니다.")

if 요일 == 4 :
	print(num,"일은 토요일입니다.")

if 요일 == 5 :
	print(num,"일은 일요일입니다.")

if 요일 == 6 :
	print(num,"일은 월요일입니다.")

if 요일 == 0 :
	print(num,"일은 화요일입니다.")