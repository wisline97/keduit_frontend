'''
	[문제]  
	 	철수는 일정한 빠르기로 운동장을 25바퀴 도는데 
	 	1시간 15분 20초 걸렸습니다. 		 
	  	67바퀴를 도는 데 걸리는 시간을 초로 출력하시오.
	  	
	[정답] 
		12113.6
'''

chulsu = 25
chulsu_time = (75*60)+20
per_second = chulsu_time / 25

print(per_second*67)

