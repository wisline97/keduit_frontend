'''
	[문제]						
		연필 80자루를 학생 6명에게 남김없이 똑같이 나누어 주고, 몇 자루가 남았다.	
		학생 한 명당 나눠준 연필 개수가 4의 배수이고,
		남은 연필 수가 짝수이면 True 출력하시오.
	[정답]
		False
'''

pencil = 80
student = 6

print((pencil//6)/4 == 0 and pencil % student == 0)  