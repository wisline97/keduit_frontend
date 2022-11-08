'''  	
	[문제]
		반복문을 10회 반복해서 아래와 같이 출력하시오.
		
		[예시]
			0 1
			1 2
			2 2
			3 3
			4 3
			5 3
			6 4
			7 4
			8 4
			9 4
'''

x = 0
y = 1
count = 1

while x < 10:
	print(x, y, count)
	if y > count :
		count += 1
		print("y 값 :",y,"count 값 :",count)
		print("y가 count보다 큽니다. count에 1을 더합니다")
	else:
		y += 1
		count = 1
		print("y 값 :",y,"count 값 :",count)
		print("y가 count보다 작거나 같습니다. y에 1을 더하고 count를 1로 재설정합니다")
	x+=1