'''
	[문제]
		a리스트는 학생 번호와 점수 한 세트를 이루고 있다.		
		0 ~ 7 사이의 랜덤 숫자를 저장하고,
		해당 위치의 학생 번호와 그 점수를 삭제하시오.
	[예시]
		
'''
import random

a = [1001, 40, 1002, 60, 1003, 65, 1004, 70]

num = random.randint(0,7)
i = 0
print(num)

while True:
	if i == num:
		if num % 2 == 1:
			a.remove(a[i])
			a.remove(a[i-1])
		else:
			a.remove(a[i])
			a.remove(a[i])

		break
	else:
		i += 1

print(a)