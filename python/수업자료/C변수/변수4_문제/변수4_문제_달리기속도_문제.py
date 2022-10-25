'''
	[문제] 
		철수는 일정한 빠르기로 운동장을 도는데 4바퀴에 56분이 걸린다. 
		민수는 일정한 빠르기로 운동장을 도는데 7바퀴에 1시간 24분이 걸린다. 	
		철수와 민수가 똑같이 3바퀴를 돈다면 그 차이는 몇 분 인지 구하시오.
		
	[정답] 
		6 또는 -6
'''
chulsu_time = 56
chulsu = chulsu_time // 4
minsu_time = 84
minsu  = minsu_time // 7

answer1 = (chulsu*3) - (minsu*3)
answer2 = (minsu*3) - (chulsu*3)
print(answer1,",",answer2)
