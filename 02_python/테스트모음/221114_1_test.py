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

run = 1
A_count = 0
B_count = 0

import random

while run == 1:
    print("주사위를 2개씩 굴립니다.")
    print("==========================")
    a_1 = random.randint(1,6)
    a_2 = random.randint(1,6)
    print("주사위 A:",a_1,",",a_2)
    b_1 = random.randint(1,6)
    b_2 = random.randint(1,6)
    print("주사위 B:",b_1,",",b_2)
    count = random.randint(0,1)
    print("==========================")
    A = 0
    B = 0
    print("랜덤으로 주사위 하나를 선택합니다.")
    if count == 0:
        A = a_1
        B = b_1
    if count == 1:
        A = a_2
        B = b_2
    print("주사위 A:",A,"주사위 B:",B)
    print("==========================")
    if A % 2 == 0 and B % 2 == 0:
        if A > B:
            print("A가 승리")
            A_count += 1
            B_count = 0
        elif A < B:
            print("B가 승리")
            B_count += 1
            A_count = 0
        else:
            print("A와 B 무승부")
            A_count = 0
            B_count = 0
    elif A % 2 == 1 and B % 2 == 1:
        if A < B:
            print("A가 승리")
            A_count += 1
            B_count = 0
        elif A > B:
            print("B가 승리")
            B_count += 1
            A_count = 0
        else:
            print("A와 B 무승부")
            A_count = 0
            B_count = 0
    else:
        print("A와 B 무승부")
        A_count = 0
        B_count = 0

    if A_count == 3 or B_count == 3:
        run = 0
        if A_count == 3:
            print("A가 3번 연속으로 승리했습니다.")
        if B_count == 3:
            print("B가 3번 연속으로 승리했습니다.")
print("==========================")