'''
	[문제]	  	
		마트에서 오이를 3개씩 묶어서 1500원에 판매한다.
		오이가 14개 필요하다면,
		필요한 금액을 출력하시오.
		단, 오이는 묶음으로만 판매한다.
	[정답]
		7500
'''

오이1묶음_가격 = 1500
오이_개수 = 14

오이묶음_수량 = 오이_개수 // 3
if 오이_개수 % 3 != 0:
    오이묶음_수량 = 오이묶음_수량 + 1
print(오이묶음_수량)

금액 = 오이묶음_수량 * 오이1묶음_가격
print(금액)