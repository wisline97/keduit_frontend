print("==========================")

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
"""
import random

print("=문제 1=")

A_a = random.randint(1,6)
A_b = random.randint(1,6)
B_a = random.randint(1,6)
B_b = random.randint(1,6)

print("A_a :", A_a)
print("A_b :", A_b)
print("B_a :", B_a)
print("B_b :", B_b)

A_choice = random.randint(1,2)
B_choice = random.randint(1,2)

print("A_choice :", A_choice)
print("B_choice :", B_choice)

if A_choice == 1:
    A_final = A_a

else:
    A_final = A_b

if B_choice == 1:
    B_final = B_a

else:
    B_final = B_b

print("A_final :", A_final)
print("B_final :", B_final)

if A_final % 2 == 0 and B_final % 2 == 0:
    if A_final > B_final:
        win = "A Won"
    elif A_final < B_final:
        win = "B Won"
    else:
        win = "Both Won"

elif A_final % 2 == 1 and B_final % 2 == 1:
    if A_final < B_final:
        win = "A Won"
    elif A_final > B_final:
        win = "B Won"
    else:
        win = "Both Won"


else: 
    win = "Both Won"

print(win)

print("==========================")

"""
    [문제]
        반복문을 활용해서 1~99까지 반복한다.
        1~99사이의 숫자중에서 4 와 8 의 개수를 출력하시오.
    [정답]
        40
"""
print("=문제 2=")

count = 0

for i in range(99):
    i+=1
    i_1 = i % 10
    i_10 = i // 10

    if i_1 == 4 or i_1 == 8:
        count += 1

    if i_10 == 4 or i_10 == 8:
        count += 1

print(count, "개")

print("==========================")