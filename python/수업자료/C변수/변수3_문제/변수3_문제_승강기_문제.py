'''
	[문제] 
	    한번에 500kg까지 운반할 수 있는 승강기가 있다.
	    몸무게가 70kg인 배달원이 이 승강기를 타고 
	    하나의 무게가 30kg인 상자를 운반하려고 할 때,
	    한 번에 최대 몇 상자까지 운반할 수 있는지 알아보자.
	    
	[정답]
		14
'''

total = 500
worker_weight = 70
box = 30

answer = (total - worker_weight) // box

print(answer, "상자")