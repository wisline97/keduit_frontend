'''
	[문제]
	  	200의 약수 중에서 순서대로 약수를 출력했을 때, 
        [조건1] 십의자리가 4인 약수들만 출력하고, 
        [조건2] 그 전체 합을 구하시오.
        [조건3] 위 수의 개수를 출력하시오.
    [정답]
        40 
        total = 40
        count = 1
'''

num = 1
max = 200
total = 0
count = 0

while num<=max:
    if max%num == 0:
        if num % 100 // 10 == 4:
            print(num, end=" ")
            total += num
            count += 1
    num += 1

print()
print("[조건2] 약수의 전체 합 :",total)
print("[조건3] 약수의 개수:",count)