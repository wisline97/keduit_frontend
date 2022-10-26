'''
	[문제]
		철수는 2시간 동안 블록을 231개 쌓았다. 
		민수는 1시간 반 동안 블록을 177개 쌓았다.
		철수가 민수보다 블록 쌓는 속도가 더 빠른지 구하시오. 
		위 내용을 비교연산자로 표현하시오.
    [정답]
        True
'''

chulsu_time = 120 * 60
chulsu_block = 231
chulsu_per_s = round(chulsu_block / chulsu_time, 3)


minsu_time = 90 * 60
minsu_block = 177
minsu_per_s = round(minsu_block / minsu_time, 3)

print("철수가 블럭 1개를 쌓는데 걸리는 시간", chulsu_per_s,"초")
print("민수가 블럭 1개를 쌓는데 걸리는 시간" ,minsu_per_s,"초")
print(chulsu_per_s > minsu_per_s)