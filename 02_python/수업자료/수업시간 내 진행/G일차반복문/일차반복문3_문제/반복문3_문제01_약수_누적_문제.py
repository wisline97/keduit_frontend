'''
	[문제]
		[조건1]  30의 약수를 출력하고 
  		[조건2]  전체 합을 구하시오.
		[조건3]  개수를 구하시오.

	[정답]	
		1 2 3 5 6 10 15 30
		total = 72
		count = 8
'''

max = 30
num = 1
total = 0
count = 0
while num <= max :
	if max % num == 0:
		print(num, end=" ")
		total += num
		count += 1
	num += 1

print()
print("[조건2] 약수의 전체 합 :",total)
print("[조건3] 약수의 개수:",count)