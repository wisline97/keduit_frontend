'''
	[문제]
	 	철수는 자전거를 타고 일정한 빠르기로 2시간 동안 37876m를 갔다.
	 	철수가 자전거를 타고 30초 동안 간 거리를 구하시오.
	 	소수점 두 자리까지 구하시오. 
	 	
	[정답] 
		157.82
'''

chulsu_meter = 37876
per_hour = chulsu_meter / 2
per_minute = per_hour / 60
per_second = per_minute / 60

answer = per_second*30

print(round(answer, 2))