'''
	[문제] 
		1000의 약수 중에서 200~800 사이 중에 
		일의자리가 0인 수만 출력하시오.
	[정답]
		200
		250
		500
'''
i = 1
max = 1000

while i <= max :
	if i >= 200 and i<=800:
		if max % i == 0:
			print(i)
	i += 1