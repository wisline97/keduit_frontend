print("===================================")
'''
   [문제]
      철수는 고속버스를 타고 여행을 떠나려 한다.
      출발시간까지 1시간 30분 여유가 있다.
      고속버스 역과 상점을 시속 3km로 걸어서 왕복하고,
      15분 동안 물건을 쇼핑하려고 한다.
      역에서 1.6km 떨어진 상점을 다녀올 수 있을지 구하시오.
   
      위 식을 표현하고, 풀이 과정을 주석으로 작성하시오.
'''

출발시간여유 = 90
킬로미터이동시간 = 60/3
왕복시간 = 킬로미터이동시간*(1.6*2)
쇼핑시간=15
총걸리는시간 = 쇼핑시간 + 왕복시간

print("왕복시간:",왕복시간,"분")
print("총걸리는시간:",총걸리는시간,"분")

if 총걸리는시간 < 출발시간여유:
    print("상점을 다녀올 수 있다")
else:
    print("상점을 다녀올 수 없다")

print("===================================")

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
    [1] 주사위 숫자의 합만큼 이동한다. 
        예) 3, 5 ==> 8 만큼 이동한다.

    [2] 단, 두 주사위 숫자가 둘다 짝수인경우는 숫자의 두배를 이동한다.
        예) 2, 2 ==> 4 + 4
		예) 5, 2 ==> 7

    [3] 14, 15, 16 번의 위치에 함정이 있다. 
        함정에 걸리면 다시 주사위 2개를 던지고 
        둘중 하나라도짝수이면 [페널티] 처음 위치(0)로 이동한다.
        둘다 홀수 라면 [페널티 없음] 함정을 탈출하여 다음 칸(17)으로 이동한다.

    [4] 20 이상의 값이 나오면 "승리"를 출력한다.
'''	
import random

dice1 = random.randint(1,6)
dice2 = random.randint(1,6)
철수기존위치 = 9
철수최종위치 = 0

print("주사위 1:", dice1)
print("주사위 2:", dice2)

print("철수기존위치:", 철수기존위치)


철수최종위치 = 철수기존위치 + dice1 + dice2

if dice1 % 2 == 0 and dice2 % 2 ==0:
    철수최종위치 = 철수기존위치 + (dice1*2) + (dice2*2)
    print("철수최종위치:", 철수최종위치)

else :
    철수최종위치 = 철수기존위치 + dice1 + dice2
    print("철수최종위치:", 철수최종위치)


if 철수최종위치 >= 14 and 철수최종위치 <=16:
    print("함정에 빠졌습니다. 주사위 3,4를 굴려주세요")
    dice3 = random.randint(1,6)
    dice4 = random.randint(1,6)
    print("주사위 3:", dice3)
    print("주사위 4:", dice4)

    if dice3 % 2 ==0 or dice4 % 2 == 0:
        철수최종위치 = 0
        print("철수최종위치:", 철수최종위치)
        print("함정에서 빠져나오지 못했습니다. 페널티로 처음 위치로 이동합니다")
        print("F5를 눌러 게임을 다시 시작해주세요")


    if dice3 % 2 !=0 and dice4 % 2 != 0:
        철수최종위치 = 17
        print("함정에서 빠져나왔습니다")
        print("철수최종위치:", 철수최종위치)

if 철수최종위치 >= 20 :
    print("승리")

print("===================================")