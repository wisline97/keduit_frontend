'''
	[문제]
		어떤 수를 1부터 자기 숫자까지 나눠서 나눠지는 수를 약수라고 한다. 
		랜덤으로 1~100을 저장 후, 
		약수가 3개이면 "정답"을 
		아니면 "오답"을 출력하시오.
'''

import random

min = 1
max = 100
num = random.randint(1,100)
count = 0

print(num)

while min <= max:
	
	if num%min == 0:
		count +=1
	min +=1

print("랜덤숫자는", num, "약수의 개수는",count,"개")

if count >= 3:
	print("정답")
else :
	print("오답")