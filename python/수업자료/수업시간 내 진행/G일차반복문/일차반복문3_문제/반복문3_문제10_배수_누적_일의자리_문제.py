'''
	[문제]
	    100~200 사이의 숫자 중에서 
        [조건1] 6의 배수 중에서 일의 자리가 2인 수만 출력하고, 
        [조건2] 그 합을 구하시오.
        [조건3] 그 개수를 구하시오.
    [정답]
        102 132 162 192 
        total = 588
        count = 4
'''

num = 100
max = 200
total = 0
count = 0

while num<=max:
	if num % 6 == 0:
		if num % 10 == 2:
			print(num, end=" ")
			total += num
			count += 1
	num += 1

print()
print("[조건2] 약수의 전체 합 :",total)
print("[조건3] 약수의 개수:",count)