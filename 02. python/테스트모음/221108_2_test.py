"""
    [문제]
        아래 조건에 모두 맞는 결과를 출력하시오.
        [1] 랜덤 숫자 10개를 출력한다.
        [2] 랜덤 숫자는 2 또는 5만출력한다.
        [3] 단, 둘중하나라도 3개에 먼저도달하면, 남은개수는 반대편 숫자로 전부 출력한다. 

    [예시]
        2, 5, 5, 2, 5, 2, 2, 2, 2, 2  
    [예시]
        5, 5, 2, 2, 2, 5, 5, 5, 5, 5
"""

import random

num1 = 2
num2 = 5

count1=0
count2=0

run = 1

while run == 1:
    picknum = random.randint(0,1)
    if picknum == 0:
        picknum = num1
        count1 += 1

    if picknum == 1:
        picknum = num2
        count2 += 1

    if count1 == 3 or count2 == 3:
        run = 0

    print(picknum)

i = count1+count2

while i<10:
    if count1 >=3:
        print(num2)
    if count2 >=3:
        print(num1)
    i += 1
