'''
	[문제]
		철수와 민수는 가위바위보를 6회 하였다. 
		가위(0) , 바위(1) , 보(2) 를 뜻한다. 
		아래 배열은 각각 가위바위보를 낸 기록을 저장한 것이다. 
		
		철수와 민수는 계단 50번째부터 게임을 시작하였다. 
		민수는 게임을 모두 끝마치고 어디 있는지 구하시오.
		[규칙]
			이기면 5칸 올라간다.
			비기면 1칸 올라간다.
			지면 3칸 내려간다. 
	[정답]
		48
'''

철수 = [0,1,2,2,1,0]
민수 = [2,1,1,2,0,1]

철수_위치 = 50
민수_위치 = 50
print("==========================")
for i in range(len(철수)):
	if 철수[i] == 0 and 민수[i] == 1:
		print("철수 가위, 민수 바위")
		print("민수 승리")
		print("==========================")
		철수_위치 -= 3
		민수_위치 += 5
	elif 철수[i] == 0 and 민수[i] == 2:
		print("철수 가위, 민수 보")
		print("철수 승리")
		print("==========================")
		철수_위치 += 5
		민수_위치 -= 3
	elif 철수[i] == 1 and 민수[i] == 0:
		print("철수 바위, 민수 가위")
		print("철수 승리")
		print("==========================")
		철수_위치 += 5
		민수_위치 -= 3
	elif 철수[i] == 2 and 민수[i] == 0:
		print("철수 보, 민수 가위")
		print("민수 승리")
		print("==========================")
		철수_위치 -= 3
		민수_위치 += 5
	elif 철수[i] == 1 and 민수[i] == 2:
		print("철수 바위, 민수 보")
		print("민수 승리")
		print("==========================")
		철수_위치 -= 3
		민수_위치 += 5
	elif 철수[i] == 2 and 민수[i] == 1:
		print("철수 보, 민수 바위")
		print("철수 승리")
		print("==========================")
		철수_위치 += 5
		민수_위치 -= 3
	else:
		print("비김")
		print("==========================")
		철수_위치 += 1
		민수_위치 += 1


print("민수 최종 위치:",민수_위치)
print("==========================")