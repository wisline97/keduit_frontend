"""
[문제]
    철수는 5440미터를 가는데 1시간 12분이 걸렸다. 
    철수의 시속은 얼마인지구하시오.
    소수점 두자리로 구하시오.
[정답]
    4.53
"""
철수1분 = 5440 / 72
# print(철수1분)
철수시속 = 철수1분 * 60 / 1000
print(round(철수시속, 2))

"""
[문제]
    철수는 시속3km의 속도로 2시간 21분을 걸었다.
    철수는 몇km를 걸었는지 구하시오.
    소수점 두자리로 구하시오.

[정답]
    7.05
"""
철수분속 = 3/60
철수거리 = 철수분속 * 141
print(round(철수거리 , 2))

"""
[문제]
    (1~20)사이의 랜덤숫자를 a, b, c 에 각각 저장후출력한다.
    a 와 c중 어느 값이 b와 더 가까운지 출력하시오. 
[예시]
    a:  18  b:  6  c:  8
    "c가 더가깝다"
"""
import random
a = random.randint(1, 20)
b = random.randint(1, 20)
c = random.randint(1, 20)

print("a: " , a , " b: " , b , " c: " , c)
aa = a - b
if aa < 0 :
    aa = aa * -1
print(aa)

cc = b - c
if cc < 0:
    cc = cc * - 1
print(cc)
if aa > cc:
    print("c")
if aa < cc:
    print("a")
if aa == cc:
    print("equal")
