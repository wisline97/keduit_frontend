'''
	[문제]	
		아래 a 리스트는 한 줄 리스트이지만 
		아래와 같이 사각형으로 놓였다고 했을 때,  
		[1] a 리스트의 가로 합은 garo 리스트에 저장하시오.
		[2] a 리스트의 세로 합은 sero 리스트에 저장하시오.
	[정답]
		garo = [10, 26, 42]
		sero = [15, 18, 21, 24]
'''	

a = [1, 2, 3, 4,
     5, 6, 7, 8,
     9, 10,11,12]

garo = [0, 0, 0]
sero = [0, 0, 0, 0]

garo_index = 0
garo_count = 0
for i in range(len(a)):
	garo[garo_index] += a[i]
	garo_count += 1
	if garo_count % 4 == 0:
		garo_count = 0
		garo_index += 1
print(garo)

sero_index = 0
sero_count = 0

for y in range(4):
	sero[sero_index] = a[y] + a[y+4] + a[y+8]
	sero_index += 1

print(sero)