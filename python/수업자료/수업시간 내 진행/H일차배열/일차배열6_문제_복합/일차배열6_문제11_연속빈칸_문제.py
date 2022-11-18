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

needsize = random.randint(1,3)

available_size = 0
available_size_min = 1
available_size_max = 0

가능여부 = False

a = [0,1,0,0,0,1,0,0]

for i in range(len(a)):
	if a[i] == 0:
		available_size += 1
		if available_size_max < available_size:
			available_size_max = available_size
		elif available_size_min > available_size:
			available_size_min = available_size
	else:
		available_size = 0

print("남은 인벤토리 칸 :",available_size_min,"~",available_size_max)
print("보관해야 할 물건의 크기는 :",needsize)


if needsize <= available_size_max:
		가능여부 = True



# a = [0,1,0,0,0,1,0,0]
i = 0
count = 0
if 가능여부 == True:
	print("보관가능")
	while True:
		if needsize == available_size_min:
			a[i] += 1
			count += 1

		elif needsize != available_size_min and needsize <= available_size_max:
			a[i+2] += 1
			i += 1
			count += 1

		if count == needsize:
			break


else:
	print("보관불가")

print(a)

# 드디어 풀었다................

'''
실행안되는 코드

	while True:
		if needsize == 0:
			break
		elif needsize != 0 and needsize < 2:
			a[i] += 1
			needsize -= 1
			print("메롱",a[i], available_size)
		else:
			a[i+2] = 1
			needsize -= 1
			i += 1
		
'''
