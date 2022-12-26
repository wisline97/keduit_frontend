'''
[문제]
	130 의 약수 중에서 작은 수부터 큰 수를 출력했을 때, 
	다섯 번째 약수만 출력하시오.
[정답]
	13
'''
print("--문제1--")
i = 1
count = 0
while i <= 130:
	if 130 % i == 0:
		count += 1
		if count == 5:
			print(i)
	i += 1
'''
[문제]
    두 자릿수의 28의 배수 중에서 가장 큰 수를 출력하시오.
[정답]
   84
'''
print("--문제2--")
i = 28
run = 1
num = i
while run == 1:
	if i % 28 == 0:
		num = i
	i += 1
	if i >= 100:
		run = 0
print(num)
