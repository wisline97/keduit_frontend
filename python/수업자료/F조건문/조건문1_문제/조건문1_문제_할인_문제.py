'''
	[문제]
		철수는 볼펜을 10~30개를 구입해야 한다. 
		
		볼펜 하나의 가격은 1200원이다. 	
		볼펜은 20개 이상 구매 시 볼펜 한 개에 100원을 할인해주고 있다. 
			
		볼펜 수를 랜덤으로 저장하고,
		철수가 지급해야 하는 금액을 출력하시오.
		[예]
			볼펜 수 = 22
			지급 금액 = 22 * 1100 = 24200
'''

import random
chulsu_pen = random.randint(10,30)
pen_price1 = chulsu_pen * 1200
pen_price2 = chulsu_pen * 1100


print(chulsu_pen, pen_price1, pen_price2)

if chulsu_pen < 20 :
	print("볼펜 수 =", chulsu_pen, "개")
	print("볼펜 가격 =", chulsu_pen,"*","1200", pen_price1, "원")

if chulsu_pen >= 20 :
	print("볼펜 수 =", chulsu_pen, "개")
	print("볼펜 가격 =",chulsu_pen,"*","1100", pen_price2, "원")