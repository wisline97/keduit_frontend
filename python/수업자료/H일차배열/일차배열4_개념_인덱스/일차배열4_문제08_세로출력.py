'''
	[가로세로합]	
		아래 a 리스트는 한줄 리스트이지만 아래와 같이 사각형으로 놓였다고했을때,  
		세로로 출력 
	[예시]
		1 5 9
		2 6 10
		3 7 11
		4 8 12
'''	

a = [1, 2, 3, 4,
     5, 6, 7, 8,
     9, 10,11,12]

for i in range(4):
    print(a[i] , " " , a[i + 4] , " " , a[i + 8])
    