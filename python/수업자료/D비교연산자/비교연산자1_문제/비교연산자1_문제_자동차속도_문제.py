'''
	[문제] 
	  	자동차는 154km의 거리를 1시간 18분에 달린다.
	  	트럭은 215km의 거리를 2시간 17분에 달린다. 			
	  	자동차가 트럭보다 빠른지 확인하시오.
	
		위 내용을 비교연산자로 표현하시오.
    [정답]
        True
'''

car_speed = 154 / 78
truck_speed =  215 / 137

print(round(car_speed, 2) > round(truck_speed, 2))