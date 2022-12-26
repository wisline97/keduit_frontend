'''
[문제] 		
    철수는 지금 모두의 마블 게임을 하고 있다.
    게임은 0 ~ 20까지 이동할 수 있는 거리가 있다.
    지금 철수의 차례이고 , 
    현재의 위치는 시작점으로부터 9만큼 이동했다.		 
    1 ~ 6의 눈금이 있는 주사위 2개를 던진다.
    주사위 숫자의 합만큼 이동한다. 
    아래 조건을 모두 만족하는 철수의 위치를 출력하시오.
        
    [조건]
    [1] 두 주사위 숫자가 서로 다를 경우는 현재위치에서
        주사위 숫자의 합만큼 이동한다. 
        예) 3, 5 ==> 8 만큼 이동한다.

    [2] 두 주사위 숫자가 같은 경우 보너스 이동 거리 6이 추가된다.
        예) 2, 2  ==> 4 + 6 만큼 이동한다.

    [3] 14, 15, 16 번의 위치에 함정이 있다. 
        함정에 걸리면 다시 주사위 2개를 던지고 
        그 합이 6이하이면 [페널티] 처음 위치(0)로 이동한다.
        그 합이 7이상이면 [페널티 없음] 함정을 탈출하여 다음 칸(17)으로 이동한다.

    [4] 20 이상의 값이 나오면 "승리"를 출력한다.
'''	

import random

dice1 = random.randint(1,6)
dice2 = random.randint(1,6)
chulsu = 9
count = 0

print("주사위1 :", dice1,",", "주사위2 :", dice2)

if dice1 == dice2 :
    count = chulsu+dice1+dice2 + 6
    print("보너스! +6칸")

if dice1 != dice2 :
    count = chulsu+dice1+dice2

print("철수의 기존위치(9) +",dice1,"+",dice2,"=",count)

if count <= 16 and count >=14 :
    print("철수가 함정에 빠졌습니다")
    dice3 = random.randint(1,6)
    dice4 = random.randint(1,6)
    print("주사위3 :", dice3, "주사위4 :", dice4)
    if dice3+dice4 <= 6 :
        count = 0
        print("주사위의 합이 6이하입니다. 다시 처음 위치로 이동합니다.")
    if dice3+dice4 >= 7 :
        count += 1
        print("주사위의 합이 7이상입니다. 함정에서 탈출합니다.")


if count > 16 and count < 20 :
    print("주사위를 한 번 더 던져주세요.")
    dice5 = random.randint(1,6)
    dice6 = random.randint(1,6)
    count = count + dice5 + dice6
    print("원래위치 +",dice5,"+",dice6,"=",count)

if count >= 20 :
    print("승리")

