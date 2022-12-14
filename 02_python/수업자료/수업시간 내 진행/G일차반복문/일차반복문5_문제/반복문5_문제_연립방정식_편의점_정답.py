'''
	[문제]
		철수가 편의점에서 우유를 15개 구입하려고 한다. 
		한 개에 1000원인 흰 우유와 
		한 개에 1200원인 초코 우유를 합쳐서 총 15개 구입했다.
		20000원을 내고 4200원을 거슬러 받았을 때 
		철수가 구입한 흰 우유는 몇 개인지 구하시오.
	[정답]
		11
'''

흰_우유_가격 = 1000
초코_우유_가격 = 1200

구매한_우유_총수량 = 15
흰_우유_수량 = 구매한_우유_총수량
초코_우유_수량 = 0

현금 = 20000
거스름돈 = 4200
우유_총금액 = 현금 - 거스름돈

run = 1
while run == 1:
	if 흰_우유_수량 + 초코_우유_수량 == 구매한_우유_총수량 and 흰_우유_수량 * 흰_우유_가격 + 초코_우유_수량 * 초코_우유_가격 == 우유_총금액:
		print("흰 우유 =", 흰_우유_수량)
		print("초코 우유 =", 초코_우유_수량)
		run = 0
	else:
		흰_우유_수량 -=1
		초코_우유_수량 += 1


