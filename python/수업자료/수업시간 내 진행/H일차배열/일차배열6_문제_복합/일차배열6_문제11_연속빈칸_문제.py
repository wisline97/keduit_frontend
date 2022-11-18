'''
	[문제]
		철수네 공장의 창고를 아래 a리스트로 표현하였다.
		1은 물건이 차 있는 상황이고 0은 비어있는 상황이다.
		랜덤(1~5)으로 물건 크기를 입력받고 창고에 저장 후 출력하시오.
		저장할 수 없으면 "창고 부족"이라고 출력하시오.
		단, 물건은 앞에서부터 채워나간다.
	[예]
		r = 3
  		[0,1,0,0,0,1,0,0] : [0,1,1,1,1,1,0,0]
    
		r = 4
		[0,1,0,0,0,1,0,0]  : "창고부족"
'''

import random

needsize = random.randint(1,5)
available_size = 0
가능여부 = False
a = [0,1,0,0,0,1,0,0]

print("보관할 수 있는 물건 크기의 범위 : 1~3")

for i in range(len(a)):
	if available_size == needsize:
		가능여부 = True

	if a[i] == 0:
		available_size += 1
	else:
		available_size = 0

print("보관해야 할 물건의 크기는 :",needsize)



if 가능여부 == True:
	print("보관가능")
	i = 0
	while available_size >= 0:
		if needsize < available_size:
			a[i] = 1
			break
		elif needsize == available_size:

else:
	print("보관불가")