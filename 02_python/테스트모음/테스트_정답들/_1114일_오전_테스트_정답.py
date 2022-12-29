"""
[문제]
    [내마음대로 주사위게임]
        내마음대로 주사위게임 은 a와 b가 주사위를 두개를 던진다.
        두개의 주사위중 하나를 랜덤으로 선택해서 제시한다.

        아래의 특별한 게임규칙에 따라 승패가 갈린다. 
       
        a는 주사위를 2개 던진다.
        b는 주사위를 2개 던진다.

        a와 b는 두 주사위중 하나를 랜덤 선택해서 제출한다. 

        <게임규칙>
            [1] 숫자가 둘다 짝수이면 둘중 큰수가 승리 , 숫자가 같으면 비김
            [2] 숫자가 둘다 홀수이면 둘중 작은수가 승리 , 숫자가 같으면 비김
            [3] 하나는 짝수이고 하나는 홀수이면 
                주사위 숫자와 상관없이 비긴다. 

    a 와 b는 위 게임을 무한으로 반복한다. 
    둘중 한명이 연속으로 3번 승리하면 게임 종료. 
    과정을 전부 출력한다. 
"""
import random

run = 1
ca = 0
cb = 0
while run == 1:
    a1 = random.randint(1, 6)
    a2 = random.randint(1, 6)
    b1 = random.randint(1, 6)
    b2 = random.randint(1, 6)
    sa = random.randint(1,2)
    sb = random.randint(1,2)
    resulta = 0
    resultb = 0
    
    if sa == 1:
        resulta = a1
    if sa == 2:
        resulta = a2

    if sb == 1:
        resultb = b1
    if sb == 2:
        resultb = b2 

    print(resulta , resultb  , end=" ")

    if resulta % 2 == 0 and resultb % 2 == 0:
        if resulta > resultb:
            print("a승리" )
            ca += 1
            cb = 0
        if resulta < resultb:
            print("b승리")
            cb += 1
            ca = 0
        if resulta == resultb:
            print("비김")
            ca = 0
            cb = 0

    if resulta % 2 == 1 and resultb % 2 == 1:
        if resulta < resultb:
            print("a승리")
            ca += 1
            cb = 0
        if resulta > resultb:
            print("b승리")
            cb += 1
            ca = 0
        if resulta == resultb:
            print("비김")
            ca = 0
            cb = 0
    
    if resulta % 2 == 1 and resultb % 2 == 0:
        print("비김")
        ca = 0
        cb = 0

    if resulta % 2 == 0 and resultb % 2 == 1:
        print("비김")
        ca = 0
        cb = 0

    if ca == 3:
        print("a최종승리")
        run = 0

    if cb == 3:
        print("b최종승리")
        run = 0


    



     

