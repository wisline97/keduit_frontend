'''
	[문제]
		철수는 총거리가 5km인 산책로를 걷는데 
		처음에는 시속 4km로 걷다가 도중에 힘이 들어
		남은 거리는 시속 2km로 걸어서 2시간 만에 산책을 마쳤다. 
		시속 4km로 걸은 거리와 시속 2km로 걸은 거리를 각각 구하시오.
		주석으로 표현하시오.
	[정답]
		시속4km 거리 = 2
		시속2km 거리 = 3
'''




'''
거리 = 시간 * 속력
시간 = 거리 / 속력
속력 = 거리 / 시간 

총 거리 = 5km
총 소요 시간 = 2시간

시속 4km 거리 = x
시속 2km 거리 = y = 3

x + y = 5

x = 5 - y

(x / 4) + (y / 2) = 2
2x + 4y = 16

2(5 - y) + 4y = 16

10 - 2y + 4y = 16
2y = 6
y = 3

x + 3 = 5
x = 2

총 거리 = 5km
총 소요 시간 = 2시간

'''

x = 2
y = 3

print("시속4km 거리 =", x)
print("시속2km 거리 =", y)