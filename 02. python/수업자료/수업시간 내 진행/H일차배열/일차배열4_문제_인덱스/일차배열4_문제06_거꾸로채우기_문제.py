'''
	[문제]
		공간이 10개인 a리스트가 있다. 
		랜덤(0~9)로 시작 인덱스를 저장한다.
		랜덤(1~10)로 개수를 저장한다.
		시작 인덱스부터 개수만큼 거꾸로 숫자를 채워나간다.
		채우는 숫자는 1부터 1씩 증가한다.
		
	[예시]
		ranIndex = 3 
		ranCount = 7		
  		a = [4,3,2,1,0,0,0,7,6,5]  
  			- 인덱스 3부터 7개를 채운다. 
	

'''

import random

r_index = 1
r = 9

print("랜덤 인덱스",r_index)
print("랜덤 개수",r)

a = [0, 0, 0, 0, 0, 0, 0, 0, 0, 3]

run = 1

i = 0


while run == 1:
	a[r_index] = i+1
	r_index -= 1
	
	i+=1

	if i == r:
		run = 0

print(a)