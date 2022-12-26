"""
    [문제]
        랜덤으로 1~10중에서 짝수만 5개 출력하시오.

"""
print("--[문제1]--")
import random
c = 0
run = 1
while run == 1:
    r = random.randint(1, 10)
    if r % 2 == 0:
        print(r)
        c += 1
    if c == 5:
        run = 0

'''
    [문제]
        무한반복문을 활용해서 
        눈금이 1~6 인 주사위 두개를 던진다.
        주사위1 과 주사위2 의 차이가 1일때 가 연속으로 두번나오면 게임은 종료된다.
        주사위의 눈금을 전부 출력하시오. 
    [예시]
        1, 4 (카운트0)
        2, 4 (카운트0)
        4, 3 (카운트1)
        6, 1 (카운트0)
        2, 3 (카운트1)
        4, 5 (카운트2) 종료
       
'''
print("--[문제2]--")

import random
c = 0
run = 1
while run == 1:
    r1 = random.randint(1, 6)
    r2 = random.randint(1, 6)
    print(r1 , " " , r2)
    gap = r1 - r2
    if gap != 1 and gap != -1:
        c = 0
    if gap == 1 or gap == -1:
        c += 1

    if c == 2:
        print("종료")
        run = 0