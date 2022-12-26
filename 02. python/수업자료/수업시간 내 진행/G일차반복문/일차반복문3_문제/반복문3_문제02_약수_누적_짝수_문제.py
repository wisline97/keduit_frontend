'''
	[문제]
		[조건1] 18의 약수 중 짝수들만 출력하고, 
     	[조건2] 총합을 출력하시오.
		[조건3] 개수를 구하시오.
	[정답]
		2 6 18 
		total = 26
		count = 3
'''

num = 1
max = 18
total = 0
count = 0

while num <= max:
	if max%num == 0:
		if num % 2 == 0:
			print(num, end=" ")
			total += num
			count += 1
	num += 1

print()
print("[조건2] 약수의 전체 합 :",total)
print("[조건3] 약수의 개수:",count)