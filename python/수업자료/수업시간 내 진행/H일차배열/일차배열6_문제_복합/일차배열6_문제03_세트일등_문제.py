'''
	[문제]
		a리스트는 학생 번호와 점수 한 세트를 이루고 있다.		
		일등 학생의 번호와 점수를 출력하시오.
	[정답]
		번호 = 1002
		점수 = 82
'''
a = [1001, 40, 1002, 82, 1003, 65, 1004, 70]
first_score = 0
first_num = 0

for i in range(len(a)):
	if i % 2 == 1:
		if a[i]>first_score:
			first_score = a[i]
			first_num = a[i-1]


print("일등 학생 번호:", first_num)
print("일등 학생 점수:", first_score)
