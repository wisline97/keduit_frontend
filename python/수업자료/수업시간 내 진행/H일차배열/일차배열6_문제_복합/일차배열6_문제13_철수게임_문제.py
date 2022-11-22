'''
	[문제]
		철수는 철수의 마블 게임을 개발 중이다. 
		map1과 map2는 게임 스테이지를 표현한다. 
		숫자 1은 철수의 위치이다. 
		주사위는 1~6까지 있고 주사위 2개를 던저서 그 합만큼 앞으로 이동한다. 		
		map1의 끝에 도달하면 map2로 이동해서 전진하고, 
		map2의 끝에 도달하면 다시 map1로 이동해서 전진한다. 		
		주사위를 총 4번 반복하고 철수의 위치를 출력하시오.
	[예시]
	(1)	시작
		map1 = [1,0,0,0,0,0,0,0,0,0]
		map2 = [0,0,0,0,0,0,0,0,0,0]
  
	(2)	주사위 3 , 5 : 8
		map1 = [0,0,0,0,0,0,0,0,1,0]
		map2 = [0,0,0,0,0,0,0,0,0,0]
		
	(3)	주사위 2 , 1 : 3
		map1 = [0,0,0,0,0,0,0,0,0,0]
		map2 = [0,1,0,0,0,0,0,0,0,0]
		
	(4)	주사위 6 , 1 : 7
		map1 = [0,0,0,0,0,0,0,0,0,0]
		map2 = [0,0,0,0,0,0,0,0,1,0]
		
	(5)	주사위 3 , 3 : 6
		map1 = [0,0,0,0,1,0,0,0,0,0]
		map2 = [0,0,0,0,0,0,0,0,0,0]
			
'''
import random
turn_max = 4
map1 = [1,0,0,0,0,0,0,0,0,0]
map2 = [0,0,0,0,0,0,0,0,0,0]
map_idx = len(map1) - 1
total_dice= 0
position = 0
print("===================시작===================")
print(map1)
print(map2)
print("==========================================")
for i in range(turn_max):
	for j in range(len(map1)):
		if map1[j] == 1:
			현재맵 = map1
			다음맵 = map2
			철수위치 = j
			pass
		elif map2[j] == 1:
			현재맵 = map2
			다음맵 = map1
			철수위치 = j
			pass

	dice1 = random.randint(1,6)
	dice2 = random.randint(1,6)

	total_dice = dice1+dice2

	print("주사위 합:",total_dice)

	if total_dice <= map_idx - 철수위치:
		현재맵[철수위치] = 0
		position += total_dice
		position %= len(map1)
		현재맵[position] = 1

	elif total_dice > map_idx - 철수위치:
		현재맵[철수위치] = 0
		position += total_dice
		position %= len(map1)
		다음맵[position] = 1

	print(map1)
	print(map2)