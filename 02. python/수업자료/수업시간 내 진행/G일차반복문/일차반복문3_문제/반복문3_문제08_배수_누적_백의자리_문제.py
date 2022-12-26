'''
	[문제]
	    1000~2000 사이의 숫자 중에서 
     	[1] 16의 배수 중에서 백의 자리가 7인 수만 출력하고, 
		[2] 그 합을 구하시오.
		[3] 개수를 구하시오.
    [정답]
		1712 1728 1744 1760 1776 1792 
		total = 10512
		count = 6
'''

num = 1000
max = 2000
total = 0
count = 0

while num<=max:
	if num % 16 == 0:
		if num % 1000 // 100 == 7:
			print(num, end=" ")
			total += num
			count += 1
	num += 1

print()
print("[조건2] 약수의 전체 합 :",total)
print("[조건3] 약수의 개수:",count)