'''
	[문제] 
		48의 약수 중 짝수만 출력하시오.
	[정답]
		2
		4
		6
		8
		12
		16
		24
		48
'''

num = 1
max = 48

while num <= max :
	if max % num == 0 and num % 2 == 0 :
		print(num)

	num += 1