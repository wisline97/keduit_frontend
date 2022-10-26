'''
	[문제] 
		321321초를 시간을 제외한 "분"과,
        시간과 분을 제외한 "초"를 구한 후,	
		분과 초를 더한값이 100보다 큰지 확인하시오.

		위내용을 비교연산자로 표현하시오.
    [정답]
        False
'''

total = 321321
hour = total // 3600
minute = (total-(hour*3600))//60
second = (total-(hour*3600)-(minute*60))

print(total,"초는", hour, "시", minute, "분", second, "초 입니다.")
print(minute+second > 100)