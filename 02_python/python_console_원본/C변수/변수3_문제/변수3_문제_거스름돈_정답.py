'''
	[문제]  
		거스름돈 174900원을 거슬러주려고 한다.
	    단, 일천 원 짜리는 매진 되어 오백원짜리로 거슬러준다면,
	    단위별로 몇 장씩 나눠줘야 하는가?
	[정답]
		 오만원  : 3 , 일만원  : 2 , 오천원 : 0, 
		 일천원  : 0 , 오백원  : 9 , 일백원 : 4
'''

거스름돈 = 174900

오만원 = 거스름돈 // 50000
일만원 = 거스름돈 % 50000 // 10000
오천원 = 거스름돈 % 10000 // 5000
일천원 = 0
오백원 = 거스름돈 % 5000 // 500
일백원 = 거스름돈 % 500 // 100

print(오만원)
print(일만원)
print(오천원)
print(일천원)
print(오백원)
print(일백원)