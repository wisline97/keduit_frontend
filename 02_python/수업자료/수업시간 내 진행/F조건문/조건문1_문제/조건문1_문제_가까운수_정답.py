'''
    [문제]		  
        a는 1~9 사이의 랜덤 숫자를 저장한다.
        c는 11~20 사이의 랜덤 숫자를 저장한다. 
        a와 c 중 어떤 숫자가 b와 더 가까운지 출력하시오.

        [1] a가 c보다 가까우면 "a가 가깝다."
        [2] c가 a보다 가까우면 "c가 가깝다."
        [3] 서로 거리가 같으면 "서로 같다."
'''
import random

a = random.randint(1, 9)
c = random.randint(11, 20)
print("a =", a)
print("c =", c)

b = 10

a차이 = b - a
if a차이 < 0:
    a차이 = -a차이
print(a차이)

c차이 = b - c 
if c차이 < 0:
    c차이 = -c차이
print(c차이)

if a차이 < c차이:
    print("a가 가깝다.")
if c차이 < a차이: 
    print("c가 가깝다.")
if a차이 == c차이:
    print("서로 같다.")



