'''
	[문제]
		다음은 학생 번화와 점수의 한 세트이다.
		일등의 번호와 점수, 꼴등의 번호와 점수를 출력하시오.
	[정답]
		일등 = 1004 98
		꼴등 = 1002 11
'''


numberList = [1001, 1002, 1003, 1004, 1005]
scoreList = [87, 11, 45, 98, 23]

first_num = 0
first_score = 0 
last_num = 0
last_score = 100

for i in range(len(scoreList)):
	if first_score < scoreList[i]:
		first_score = scoreList[i]
		first_num = numberList[i]

	elif last_score > scoreList[i]:
		last_score = scoreList[i]
		last_num = numberList[i]


print("일등 :", first_num,"번 학생", first_score,"점")
print("꼴등 :", last_num,"번 학생", last_score,"점")