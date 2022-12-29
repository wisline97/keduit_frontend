'''
	[문제] 
		numberList는 학생들의 번호를 저장한 리스트이다.
		scoreList는 학생들의 점수를 저장한 리스트이다.
 		랜덤으로 한 학생의 학번과 점수를 출력하시오.
   
	[예시1] 
        r = 0
		1001 , 87
  
	[예시2]
        r = 3
		1004 , 97
'''

import random

r = random.randint(0,4)

numberList = [1001, 1002, 1003, 1004, 1005]
scoreList =   [87, 11, 45, 98, 23]

print(r+1,"번째 학생의 번호와 점수는?")

for i in range(len(numberList)):
	if i == r:
		print(numberList[i],",", scoreList[i])