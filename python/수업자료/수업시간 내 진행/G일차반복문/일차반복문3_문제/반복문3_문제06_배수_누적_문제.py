'''
	[문제]
	    100 ~ 300 사이의 숫자 중에서 
     	[조건1] 8의 배수를 출력하고, 
      	[조건2] 그 총합을 구하시오.
		[조건3] 개수를 구하시오.
	[정답]
		104 112 120 128 136 144 152 160 168 176 184 192 200 208 216 224 232 240 248 256 264 272 280 288 296 
		total = 5000
		count = 25
'''

num = 100
max = 300
total = 0
count = 0

while num<=max:
    if num % 8 == 0:
        print(num, end=" ")
        total += num
        count += 1
    num += 1

print()
print("[조건2] 약수의 전체 합 :",total)
print("[조건3] 약수의 개수:",count)