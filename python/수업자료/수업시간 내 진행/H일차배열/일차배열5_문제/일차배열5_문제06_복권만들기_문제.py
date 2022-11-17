'''
	[문제] 
		a리스트 안에 1 또는 7을 랜덤으로 7개 추가 후 출력하시오. 
		단, 7의 개수는 3개만 추가하고, 1의 개수는 4개만 추가한다.
		위에서 만든 복권을 판정한다. 
  		7이 연속으로 3개면 "당첨"을 출력한다.
		아니면 "꽝"을 출력한다.
		
	[예]
		[ 1, 7, 7, 1, 1, 7, 1]  "꽝"
		[ 1, 1, 1, 7, 7, 7, 1]  "당첨"
'''
import random
lotto = []

a = 1
b = 7

a_count=0
b_count=0

victory_count = 0

temp =0

당첨유무 = "꽝"

for i in range(7):
	rand = random.randint(0,1)

	if rand == 0:
		a_count += 1
		
		victory_count = 0
		if a_count > 4:
			lotto.append(b)
		else:
			lotto.append(a)

	else:
		b_count += 1
		
		if b_count > 3:
			lotto.append(a)
		else:
			victory_count += 1
			lotto.append(b)
			
	if victory_count == 3:
		당첨유무 = "당첨"

print(lotto, 당첨유무)
