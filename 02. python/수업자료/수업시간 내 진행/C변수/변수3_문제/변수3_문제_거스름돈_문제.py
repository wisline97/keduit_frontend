'''
	[문제]  
		거스름돈 174900원을 거슬러주려고 한다.
	    단, 일천 원 짜리는 매진 되어 오백원짜리로 거슬러준다면,
	    단위별로 몇 장씩 나눠줘야 하는가?
	[정답]
		 오만원  : 3 , 일만원  : 2 , 오천원 : 0, 
		 일천원  : 0 , 오백원  : 9 , 일백원 : 4
'''
change = 174900
#오만원
ohman_won = change // 50000

#만원
man_won =(change-(50000*ohman_won)) // 10000

#오천원
ohcheon_won = (change-(50000*ohman_won)-(10000*man_won)) // 5000

#천원
cheon_won = 0

#오백원
ohback_won = (change-(50000*ohman_won)-(10000*man_won)-(5000*ohcheon_won)-(1000*cheon_won)) // 500

#백원
back_won = (change-(50000*ohman_won)-(10000*man_won)-(5000*ohcheon_won)-(1000*cheon_won)-(500*ohback_won)) // 100



print("오만원 :" , ohman_won, "장")
print("일만원 :" , man_won, "장")
print("오천원 :" , ohcheon_won, "장")
print("일천원 :" , cheon_won, "장")
print("오백원 :" , ohback_won, "장")
print("일백원 :" , back_won, "장")