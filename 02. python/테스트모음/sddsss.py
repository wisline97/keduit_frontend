
import random

r = random.randint(3,8)

i = 1

min = 1

총자리수 = 1

while i < r:
    min *= 10
    총자리수 += 1
    i += 1

max = min * 10 - 1

print(r , min, max)

중앙 = 0
if 총자리수 % 2 == 1:
    중앙 = 총자리수 // 2 + 1
else:
    중앙 = 총자리수 //2 

print("중앙 : " , 중앙,"번째 자리")

r = random.randint(min, max)

print("랜덤숫자 : " , r)

run = 1
i = 0

while run == 1:
    중앙값 = r % 10
    if i == 중앙:
        print("중앙값 : " , 중앙값)
        run = 0
    r //= 10
    i += 1
