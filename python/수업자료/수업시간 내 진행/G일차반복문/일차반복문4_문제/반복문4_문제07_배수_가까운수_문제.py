'''
	[문제] 
  		6의 배수를 순차적으로 검사한다. 
  		그중 100에 가장 가까운 수를 출력하시오. 
 	[정답]
		102
'''

num = 1
run = 1

while run == 1:
	if num%6==0:
		print(num, end = " ")
		if num//100 == 1 and num <= 110:
			print()
			print("정답:", num)
			run = 0
	num += 1