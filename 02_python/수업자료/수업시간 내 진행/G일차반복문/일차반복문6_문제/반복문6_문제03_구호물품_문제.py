'''
	[문제] 
		구호 물품으로 소독약 120개와 붕대 72개를 
		환자 한 명당 똑같은 양의 소독약과 붕대를 나눠주려고 한다. 
		최대한 많은 환자에게 나눠줄 때 몇 명인지 구하시오.
	[정답]
		24
'''

max = 120
min = 72
num = 200
run = 1

while run == 1:
	if max % num == 0 and min % num == 0:
		print(num)
		run = 0

	num -= 1