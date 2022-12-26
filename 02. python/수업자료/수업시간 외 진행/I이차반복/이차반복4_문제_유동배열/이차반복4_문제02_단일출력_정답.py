'''
	[문제]
		a리스트의 숫자를 하나씩 출력한다.
		단, 이미 출력이 되어 중복되는 숫자는 출력하지 마시오.
	[정답]
		1 2 3 4 100		
'''
a = [1,1,2,2]

for i in range(len(a)):
	check = False
	for j in range(i + 1):
		if i != j and a[i] == a[j]:
			check = True
			print("i는",i,"j는",j)
			print("이차반복문 빠져나감")
			break
	print("i는", i)
	print("check는", check)
	if check == False:
		print(a[i], end=" ")