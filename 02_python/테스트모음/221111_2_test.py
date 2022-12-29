print("==========================")
'''
    [문제]
        랜덤으로 3~8의 숫자를 저장한다. 
        랜덤숫자 3 이면 세자리 자리수를 뜻한다. 
        랜덤숫자 4 이면 네자리 자리수를뜻한다.
        랜덤숫자 8 이면 여덟자리 자리수를 뜻한다. 
        세자리수라면 100~999 사이의 랜덤숫자를 다시 출력
        네자리수라면 1000~9999 사이의 랜덤숫자를 다시 출력
        다섯자리수라면 10000~99999 사이의 랜덤숫자를 다시 출력
        ...
        여덟자리수라면 10000000~99999999 사이의 랜덤숫자를 다시 출력
    [주의]
        반복문을 사용할것  
    [예시] 
        r = 3  ==> 세자리수 534 
        r = 4  ==> 두자리수 1945 
        r = 5  ==> 다섯자리수 13534 
        ...
        r = 8  ==> 여덟자리수 56430145
'''
print("--[문제1]--")

import random

# 랜덤으로 변하는 num1 값에 따라 유동적으로 min 값과 max값이 변하는 코드
# 조건문을 사용하지 않아도 작성이 가능하다.
# num1의 범위값이 더 늘어나도 num2 값을 도출해낼 수 있음

num1 = random.randint(3,8)
min = 1
max = 0
i = 1

print(num1)

while i < num1:
    min *= 10
    max = (min*10) - 1
    i += 1

num2 = random.randint(min,max)

print(num2)




'''
# 내가 제출한 정답

-> 1차원적으로 작성한 코드
만약 num_1의 범위가 3부터 8이 아니라 1부터 2000까지라면
이 방식대로 작성할 수 없다.
num_1 = random.randint(3,8)
max = 0
min = 0

print("랜덤으로 3부터 8까지의 숫자를 정합니다.")
print("======================================")
print("랜덤숫자 :", num_1)
print("======================================")
print(num_1,"자리수를 가진 숫자를 랜덤으로 출력합니다.")
if num_1 == 3:
    while max < 999:
        max += 1
        min = 100
    num_2 = random.randint(min,max)

if num_1 == 4:
    while max < 9999:
        max += 1
        min = 1000
    num_2 = random.randint(min,max)

if num_1 == 5:
    while max < 99999:
        max += 1
        min = 10000
    num_2 = random.randint(min,max)

if num_1 == 6:
    while max < 999999:
        max += 1
        min = 100000
    num_2 = random.randint(min,max)

if num_1 == 7:
    while max < 9999999:
        max += 1
        min = 1000000
    num_2 = random.randint(min,max)

if num_1 == 8:
    while max < 99999999:
        max += 1
        mint = 10000000
    num_2 = random.randint(min,max)
print("======================================")
print(num_2)
'''




'''
# 이상적인 정답

r = random.randint(3, 8)
max = 1
min = 1
print(r)
while max < r:
    min *= 10
    max += 1
max = min * 10 - 1
print(min , " " , max)
r  = random.randint(min , max)
print(r)
'''