'''
    [문제]
        철수는 게임을 하고 있다. 
        monster는 게임의 적 4마리를 의미하고 9는 몬스터의 체력을 의미한다.
        철수의 공격력은 5이다.     
        랜덤으로 몬스터 중 하나를 선택해서 공격하고,
        이를 총 다섯 번 반복한다. 
        모든 몬스터를 공격한 후 몬스터들의 체력을 출력하시오.
        단, 몬스터 체력은 0이 되면 더 이상 내려가지 않는다. 
        또한 공격한 몬스터의 양쪽에게는 1의 대미지를 가하게 된다. 
        
'''

import random

monster = [9,7,8,6]
power = 5
run = True
count = 0

while run == True:
    select = random.randint(0,3)
    print("공격 대상 선택",select,"번")

    # 공격 대상 오른쪽 공격
    if select + 1 <= len(monster)-1 and monster[select] != 0:
        if monster[select+1] > 0:
            monster[select+1] -= 1

    # 공격 대상 왼쪽 공격
    if monster[select-1] > 0 and select - 1 >= 0 and monster[select] != 0:
        monster[select-1] -= 1

    # 공격 대상 공격
    if monster[select] == 0:
        print(select,"번째 몬스터는 이미 체력이 0입니다.", "대상을 다시 선택해주세요.",end =" ")

    elif monster[select] - power > 0:
        print(select,"번째 몬스터를 공격합니다" ,end =" ")
        monster[select] -= power
        
        count += 1
    else:
        print(select,"번 째 몬스터를 공격합니다",end =" ")
        monster[select] = 0
        count += 1

    # 5번 반복하면 바로 실행 중지
    if count == 5:
        run = False
    
    print(monster)
    