'''
	[문제]
		랜덤으로 리스트의 값을 교환해보자.  
		[예]
			교환전  [10,20,30,40,50,60,70,80] : 30과 40을 교환
			교환후  [10,20,40,30,50,60,70,80]
'''
import random

a =[10,20,30,40,50,60,70,80]
r1 = random.randint(0, len(a)-1)
r2 = random.randint(0, len(a)-1)

temp = a[r1]
a[r1] = a[r2]
a[r2] = temp

print(r1 , " : " , r2 , " : " , a)



