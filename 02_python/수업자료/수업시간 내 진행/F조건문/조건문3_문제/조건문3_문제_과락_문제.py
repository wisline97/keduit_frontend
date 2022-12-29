'''
	[문제]
		[1] 0에서 100 사이의 랜덤 점수 2개를 저장해 평균을 구한다.
		[2] 평균이 60점 이상이면 합격, 60점 미만이면 불합격이다.
		[3] 단, 평균이 60 이상이라도, 한 과목이라도 50 미만이면 불합격을 출력하시오.
'''


import random

a = random.randint(0, 100)
b = random.randint(0, 100)
average = (a + b) / 2

print("a는", a,"점")
print("b는", b,"점")
print("평균은", average,"점")

if average >= 60 :
	if a < 50:
		print("불합격입니다.")
	if b < 50:
		print("불합격입니다.")
	if a > 50 and b > 50 :
		print("합격입니다.")


if average < 60 :
	print("불합격입니다.")