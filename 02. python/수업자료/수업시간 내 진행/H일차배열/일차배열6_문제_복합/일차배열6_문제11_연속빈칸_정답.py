'''
	[문제]
		철수네 공장의 창고를 아래 a리스트로 표현하였다.
		1은 물건이 차 있는 상황이고 0은 비어있는 상황이다.
		랜덤(1~5)으로 물건 크기를 입력받고 창고에 저장 후 출력하시오.
		저장할 수 없으면 "창고 부족"이라고 출력하시오.
		단, 물건은 앞에서부터 채워나간다.
    	예를 들어 랜덤이 3이 나오면 연속으로 0이 3개 있어야 한다.
	[예1]
		a = [0,1,0,0,1,0,0,0,0,1]
		r = 3
  		[0, 1, 0, 0, 1, 1, 1, 1, 0, 1]

    [예시2]
		a = [0,1,0,0,1,0,0,0,0,1]
		r = 5
		"창고부족"
'''
import random
a = [0,1,0,0,1,0,0,0,0,1]
r = random.randint(1, 5)
print(r)
check = False
count = 0
index = 0
i = 0
while i < len(a):
	if a[i] == 0 and check == False:
		index = i
		check = True
		count += 1
	elif a[i] == 0 and check == True:
		count += 1

	elif a[i] == 1:
		check = False
		count = 0

	if count >= r and check == True:
		break
	
	i += 1

if check == True:
	i = 0
	while i < count:
		a[index + i] = 1
		i += 1
	print(a)
else :
	print("창고부족")