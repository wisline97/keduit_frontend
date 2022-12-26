'''
	[문제]
		아래와 같이 삼각형을 출력하시오.
  
	[예시]
		********
		******
		****
		**
'''
max = 4
for i in range(4):
	for j in range(max):
		print("**",end="")
		
	max -= 1
	print()