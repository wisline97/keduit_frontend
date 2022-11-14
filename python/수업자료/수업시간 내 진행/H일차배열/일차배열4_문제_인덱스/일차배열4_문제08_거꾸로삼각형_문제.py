'''
	  	[문제]
		 	아래 리스트를 아래와 같이 출력하시오.
		[결과]
			1234
			567
			89
			0
'''



a = [1,2,3,4,5,6,7,8,9,0]

줄바꿈횟수 = 4
count = 0
i = 0

while i<=len(a)-1:
	print(a[i], end = "")
	count += 1
	if count == 줄바꿈횟수:
		print()
		count = 0
		줄바꿈횟수 -= 1
	i+=1
