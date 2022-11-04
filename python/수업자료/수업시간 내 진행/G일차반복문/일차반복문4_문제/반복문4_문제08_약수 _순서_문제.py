'''
	[문제]
	  	745의 약수 중에서 작은 수부터 출력했을 때, 
		세 번째 약수만 출력하시오.
	[정답]
		149
'''

max = 745
num = 1
run = 1

count = 0

while run == 1:
	if max%num==0:
		print(num, end=" ")
		count += 1
		if count == 3:
			print()
			print("745의 세번 째 약수는 :",num)
			run = 0

	num += 1