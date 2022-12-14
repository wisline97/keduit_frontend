print("===================================")
"""
[문제 1]
	철수는 농구공을 18번던저 11번 성공했다.
	철수의 성공 확률을 출력하시오.
    소수점 2자리로 구하시오.
"""
chulsu = 11
chulsu_max = 18

percent = (chulsu / chulsu_max)*100
print("[문제1]")
print(round(percent,2),"%")
print("===================================")
"""
[문제2]
	철수는 12초에 100미터를 달린다.
	철수의 시속을 구하시오. 
	단, 철수는 일정한속도로 달린다.
    소수점 2자리로 구하시오.
"""
chulsu_speed = 100/12
chulsu_시속 = (chulsu_speed*3600)/1000

print("[문제2]")
print("철수 시속",round(chulsu_시속,2),"km")
print("===================================")

"""
[문제3]
    1부터 100사이의 랜덤숫자를 변수a에 저장한다. 
    a의 값이 1~5사이면 b에 95 저장후 출력
    a의 값이 6~10사이면 b에 90 을저장후 출력 
    a의 값이 11~15사이면 b에 85 를저장후 출력
    ....
    ....
    a의 값이 91~95 사이면 b에 5를 저장후 출력
    a의 값이 96~100 사이면 b에 0을 저장후 출력 
"""
import random
import math
print("[문제3]")
a = random.randint(1,100)
b = 100 - (math.ceil(a/5)*5)

print("a는",a,"b는",b)
print("===================================")
"""
[문제4]	
	자동차 카센터에는 수리를 기다리는 오토바이와 자동차가 있다.
	오토바이와 자동차를 합쳐서 21대가 있다.
	바퀴는 합쳐서 70개 일때 오토바이와 자동차의 대수를 구하시오.
"""
'''
오토바이(a)+자동차(b) = 21
(a*2)+(b*4) = 70

a = 21 - b
2(21 - b)+b*4 = 70
42-2b+4b = 70
2b = 70-42
2b = 28
b = 14
'''
합계 = 21
오토바이 = 0
자동차 = 14
바퀴 = 70

while True:
    if 오토바이+자동차 == 21 and (오토바이*2)+(자동차*4)==70:
        break
    오토바이+=1
print("[문제4]")
print("오토바이 대수:",오토바이)
print("자동차 대수:",자동차)

print("===================================")
"""
[문제5] 
    1000보다 큰 수중에서 12의 배수를 검색하고, 
    십의자리가 4인 수를
    가장 작은 수부터 차례대로 4개를 출력하시오. 
"""

min = 1000
a = 12
b = 1
count = 0
print("[문제5]")

while True:
    배수 = a*b
    if 배수 > 1000 and 배수 % 100 // 10 == 4:
        print(배수)
        count += 1
    if count == 4:
        break
    b+=1

print("===================================")
"""
[문제6]
    100 ~ 999 사이의 숫자를 랜덤으로 3개 출력한다. 
    단, 전부 각각의숫자마다 숫자5가 한개이상 포함되어야한다.
[예시]
    145
    536
    955
"""
print("[문제6]")
count = 0
while True:
    num = random.randint(100,999)
    일 = num % 10
    십 = num % 100 // 10
    백 = num // 100
    if 일 == 5 or 십 == 5 or 백 == 5:
        print(num)
        count += 1
    if count == 3:
        break
print("===================================")
"""
[문제7]
    a = [] 
    a리스트에 1~5사이의 랜덤숫자 15개를 저장한다.
    숫자 1 2 3 이 연속으로 나오면 당첨이라고 할때,
    당첨이 몇번나왔는지 출력하시오.
[예시]

    a = [1, 5, 2, 1, 2, 3, 3, 2, 1, 4, 1, 2, 3, 4, 2] 
    당첨: 2번
"""
print("[문제7]")
a=[]
max = 15
for i in range(max):
    num = random.randint(1,3)
    a.append(num)

print(a)

i = 0
j = 1
count = 0
while True:
    if i > 12:
        break
    if a[i] == 1:
        if a[i+1] == 2:
            if a[i+2] == 3:
                print("당첨!")
                count += 1
    i+=1

print("당첨은",count,"번 나왔습니다.")

print("===================================")