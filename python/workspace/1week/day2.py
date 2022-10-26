'''
	[문제]
		철수는 농구공을 12번 던져 7번 성공했다.
		영희는 농구공을 17번 던져 9번 성공했다.
		영희의 성공확률이 철수의 성공확률보다 더 높은지
    그 결과를 True 또는 False로 구하시오.
		위 내용을 비교연산자로 표현하시오.
  [정답]
      True
'''

chulsu = 12/7
younghee = 17/9

print(chulsu < younghee)

print("==================================")

'''
	[문제]
		철수는 2시간 동안 블록을 231개 쌓았다. 
		민수는 1시간 반 동안 블록을 177개 쌓았다.
		철수가 민수보다 블록 쌓는 속도가 더 빠른지 구하시오. 
		위 내용을 비교연산자로 표현하시오.
  [정답]
      True
'''

chulsu_block = 231
chulsu_time = 120
chulsu_speed = round(chulsu_time / chulsu_block, 2)
minsu_block = 177
minsu_time = 90
minsu_speed = round(minsu_time / minsu_block, 2)


print(chulsu_speed > minsu_speed)

print("==================================")

# 비교연산자1_문제_비교연산자


print('------[연습문제]-------')
print('모두 True가 되도록 아래식의 숫자를 변경하시오.')

print(3 > 1) 
print(3 < 12) 
print(1 != 3) 
print(3 == 3) 
print(3 >= 1) 
print(3 <= 12)

print("==================================")

'''
	[문제]
		가로가 3이고 세로가 6인 
        삼각형 넓이가 홀수인지 구하시오.
		위내용을 비교연산자로 표현하시오.
    [정답]
        True
'''

width = 3
height = 6
tri = 0.5 * (width*height)
print(tri%2 == 1)

print("==================================")

'''
	[문제] 
		321321초를 시간을 제외한 "분" 과 ,  시간과 분을 제외한 "초" 를 구한후,	
	 	
		분과 초를 더한값이 100보다 크다.

		위내용을 비교연산자로 표현하시오.
	
'''

total = 321321
hour = total // 3600
minute = (total-(hour*3600))//60
second = (total-(hour*3600)-(minute*60))

print(total,"초는", hour, "시", minute, "분", second, "초 입니다.")
print(minute+second > 100)

print("==================================")

total = 321321

h = total // 3600
m = total % 3600 // 60
s = total % 60

print(h,"시", m, "분", s,"초")
sum = m + s

result = sum > 100
print(result)

print("==================================")