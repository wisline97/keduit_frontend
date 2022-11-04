'''
	[문제] 
		200의 약수 중에서 짝수 중 
		80에 가장 가까운 수를 구하시오.
		만약 약수 중에 80이 있을 경우, 80이 정답이다.
	[정답]
		100
'''

num = 1
max = 200
run = 1

while run == 1:
	if max%num == 0:
		if num % 2 == 0 :
			if num >= 80 and num <= 100:
				print(num)
				run = 0
	num += 1