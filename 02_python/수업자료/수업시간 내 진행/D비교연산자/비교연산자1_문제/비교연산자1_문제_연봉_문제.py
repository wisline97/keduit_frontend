'''
	[문제]
		작년 내 연봉은 970원이다. 
        올해는 11퍼센트 인상되었다. 
		올해 우리 회사 평균 월급은 91원이다. 
		올해의 내 연봉이 올해의 우리 회사 평균 연봉보다 큰지 확인하시오.

		위 내용을 비교연산자로 표현하시오.
    [정답]
        False
'''

last_year_money = 970
percent = 0.11
this_year_money = last_year_money + (last_year_money*percent)
common_money = 91 * 12
print(this_year_money > common_money)