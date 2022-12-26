'''
   [문제]
      철수는 고속버스를 타고 여행을 떠나려 한다.
      출발시간까지 1시간 30분 여유가 있다.
      고속버스 역과 상점을 시속 3km로 걸어서 왕복하고,
      15분 동안 물건을 쇼핑하려고 한다.
      역에서 1.6km 떨어진 상점을 다녀올 수 있을지 구하시오.
   
      위 식을 표현하고, 풀이 과정을 주석으로 작성하시오.
	  
'''
총분 = 15
분속 = 3/60
간분 = 1.8 / 분속
print(간분)
print(간분 * 2 + 15 <= 90)
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
pos = 9
r1 = random.randint(1,6)
r2 = random.randint(1,6)
total = r1 + r2
if r1 % 2 == 0 and r2 % 2 == 0:
	total = total * 2
pos += total
print(r1 , " " , r2)
print(pos)

if pos == 14 or pos == 15 or pos == 16:
	print("함정")
	r1 = random.randint(1,6)
	r2 = random.randint(1,6)
	print(r1 , " " , r2)
	if r1 % 2 == 1 and r2 % 2 == 1:
		pos = 17
		print("탈출" , pos)
	if r1 % 2 != 0 or r2 % 2 != 0:
		pos = 0
		print("꽝" , pos)

if pos >= 20:
	print("승리")




