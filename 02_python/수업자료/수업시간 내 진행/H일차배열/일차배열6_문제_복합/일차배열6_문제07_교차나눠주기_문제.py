'''
	[문제] 
		c리스트의 값을 a에 한번 b에 한번 교차로 추가하시오.
	[정답]
		a = [10,30,50]
		b = [20,40,60]
'''

c = [10,20,30,40,50,60,70,80,90,100,110]

a = []
b = []

c_index= 0

while c_index < len(c):
	if  c_index % 2 == 0:
		a.append(c[c_index])
	else:
		b.append(c[c_index])
	c_index+=1


print(a)
print(b)