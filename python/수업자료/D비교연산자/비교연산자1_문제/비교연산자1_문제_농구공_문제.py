'''
	[문제]
		철수는 농구공을 12번던저 7번 성공했다.
		영희는 농구공을 17번던저 9번 성공했다.
		영희의 성공확률이 철수의 성공확률보다 더 높은지
        그 결과를 True 또는 False로 구하시오.
		위 내용을 비교연산자로 표현하시오.
    [정답]
        True
'''

chulsu = round((7 / 12) *100, 2)
younghee = round((9 / 17) *100, 2)

answer = chulsu < younghee

print("철수 성공 확률 :",chulsu, "%","영희 성공 확률 :" ,younghee, "%", answer)
