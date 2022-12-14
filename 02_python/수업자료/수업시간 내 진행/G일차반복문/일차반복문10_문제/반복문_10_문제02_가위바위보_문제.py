'''
	[문제]
		철수와 민수는 계단에서 가위바위보를 한다. 	 	
		철수와 민수는 각각 0 ~ 2 의 랜덤 값을 저장한다.
		0 : 가위 , 1 : 바위 , 2 : 보를 뜻한다.	 
		철수와 민수는 50번째 계단의 위치에서 시작한다.
		룰은 다음과 같다.	
		이기면 3칸 올라가기, 비기면 2칸 올라가기, 지면 1칸 내려가기.	 	
		둘 중 아무나 100 이상 도착하거나 
		둘 사이의 간격이 10 이상이면 게임은 종료된다. 
		게임이 종료될 때까지 두 사람의 이동 경로를 출력하시오.
'''

import random


기존위치 = 50
철수최종위치 = 기존위치
민수최종위치 = 기존위치
run = 1

#0 -> 디폴트 상태
#3 -> 이김
#2 -> 비김
#1 -> 짐
print( "철수위치 =",철수최종위치,"민수위치 =",민수최종위치)

while run == 1:
	chulsu = random.randint(0,2)
	minsu = random.randint(0,2)

	print(chulsu,",",minsu)

	if chulsu == 0 and minsu == 1:
		#민수 승리
		민수최종위치 += 3
		철수최종위치 -= 1

		print("민수 WON.")
		print("철수위치 =",철수최종위치,"민수위치 =",민수최종위치)

	if chulsu == 1 and minsu == 0:
		#철수 승리
		민수최종위치 -= 1
		철수최종위치 += 3

		print("철수 WON.")
		print( "철수위치 =",철수최종위치,"민수위치 =",민수최종위치)

	if chulsu == 0 and minsu == 2:
		#민수 승리
		민수최종위치 += 3
		철수최종위치 -= 1

		print("민수 WON.")
		print( "철수위치 =",철수최종위치,"민수위치 =",민수최종위치)

	if chulsu == 2 and minsu == 0:
		#철수 승리
		민수최종위치 -= 1
		철수최종위치 += 3

		print("철수 WON.")
		print( "철수위치 =",철수최종위치,"민수위치 =",민수최종위치)

	if chulsu == 2 and minsu == 1:
		#철수 승리
		민수최종위치 -= 1
		철수최종위치 += 3

		print("철수 WON.")
		print( "철수위치 =",철수최종위치,"민수위치 =",민수최종위치)

	if chulsu == 1 and minsu == 2:
		#민수 승리
		민수최종위치 += 3
		철수최종위치 -= 1

		print("민수 WON.")
		print( "철수위치 =",철수최종위치,"민수위치 =",민수최종위치)

	if chulsu == minsu :
		#비김
		민수최종위치 += 2
		철수최종위치 += 2
		print("철수와 민수가 비겼습니다.")
		print("철수위치 =",철수최종위치,"민수위치 =",민수최종위치)

	if 민수최종위치 - 철수최종위치 >= 10 or 철수최종위치 - 민수최종위치 >=10 or 민수최종위치 >= 100 or 철수최종위치 >= 100:
		run = 0
		print(민수최종위치, 철수최종위치)