'''
	[문제]
		[1] 랜덤숫자 1~9 다섯 개를 리스트에 추가한다.
		[2] 그 숫자 중 홀수만 하나로 모아서 숫자로 만든다. (더하기가 아니다.)
		[3] 그 숫자의 두 배를 출력한다. 
	
	[예시] 
		2 5 3 4 6 이 랜덤으로 저장되었다고 가정했을 때,
		홀수는 5, 3 이므로 합치면 53이 된다. 
		53의 두 배는 106이다. 
'''
import random

a = []
temp = []

for i in range(5):
	num = random.randint(1,9)
	a.append(num)

print(a)

for j in range(len(a)):
	if a[j] % 2 == 1:
		temp.append(a[j])

print(temp)

anwser = 0
idx = len(temp) - 1
mult = 1
for k in range(len(temp)):
	anwser += temp[idx-k] * mult
	mult *= 10

print("정답:",anwser*2)