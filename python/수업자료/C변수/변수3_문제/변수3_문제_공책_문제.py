'''
	[문제]
		철수는 친구의 생일 선물로 가격이 4000원인 필통 1개와 
		가격이 700원인 공책 몇 권을 사려고 한다. 
		철수는 13000원을 가지고 있을 때,
		공책은 최대한 몇 권을 살 수 있을지 구하시오.
		공책을 최대로 구입한 후 나머지 금액도 출력하시오.
		
	[정답] 
		12
        600
'''

total = 13000
case = 4000
note = 700

answer1 = (total - case) // note
answer2 = (total - case) % note

print(answer1, "권")
print(answer2, "원")