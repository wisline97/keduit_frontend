'''
	[문제]
		a리스트의 숫자를 하나씩 출력한다.
		단, 이미 출력이 되어 중복되는 숫자는 출력하지 마시오.
	[정답]
		1 2 3 4 100		
'''
a = [1,1,2,2,3,3,4,100,3]

b = []

idx = len(a)


answer = []

for i in range(idx):
	check = False
	for y in range(i+1):
		if i != y:
			if a[i] == a[y]:
				check = True
				break

	if check == False:
		print(a[i])