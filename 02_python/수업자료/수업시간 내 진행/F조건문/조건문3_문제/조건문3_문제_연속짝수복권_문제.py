'''
[문제]
	100~900 사이의 랜덤숫자를 출력한다. 
	세 자리의 숫자를 전부 한 자리씩 분리한다.		
	[규칙]
		[1] 세 자리 모두 짝수이면 "1등"을 출력한다.
		[2] 두 자리가 짝수이고, 짝수인 숫자가 연속이면 "2등"을 출력한다.
		[3] 그 외는 "꽝"을 출력한다.
		[4] 단, 0은 짝수이다.
		[예]
			462 ==> 4,6,2 세 자리 모두 짝수이므로 ==> 1등
			245 ==> 2,4,5 두 자리가 짝수이고 2, 4연속이므로 ==> 2등
			456 ==> 4,5,6 두 자리가 짝수이지만 연속이 아니므로 ==> 꽝
			782 ==> 7,8,2 두 자리가 짝수이고 8, 2연속이므로 ==> 2등 	
'''

import random

num = random.randint(100,900)
num100 = num // 100
num10 = num % 100 // 10
num1 = num % 10

print("랜덤숫자 :", num)

count = 0

if num100 % 2 == 0: 
	count += 1

if num10 % 2 == 0: 
	count += 1

if num1  % 2 == 0: 
	count += 1

if count == 3 :
	print("1등입니다.")

if count == 2:
	if num100 % 2 == 0 and num10 % 2 == 0 :
		print("2등입니다.")

	if num10 % 2 == 0 and num1 % 2 == 0 :
		print("2등입니다.")

	if num10 % 2 != 0 :
		print("꽝입니다.")

# if count == 2:
# 	if num100 % 2 == 0 and num10 % 2 == 0:
# 		print("2등입니다.")
# 	if num10 % 2 == 0 and num1 % 2 == 0:
# 		print("2등입니다.")
# 	if num10 % 2 == 0 and num1 % 2 != 0:
# 		print("꽝입니다.")
# 	if num100 % 2 == 0 and num10 % 2 != 0:
# 		print("꽝입니다.")

if count < 2 :
	print("꽝입니다.")

