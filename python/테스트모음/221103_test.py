print("===================================")

"""
[문제]
    책이 총 87page 이다.
    철수는 53page 를 읽었다. 몇퍼센트를 읽은 것인가?
    소수점 두자리까지 구하시오.
[정답]
	60.92
"""

print("--문제1--")

total = 87
철수 = 53
percent = 53 / 87 * 100

print("철수는 총",round(percent, 2),"%를 읽었다.")


print("===================================")


"""
3a = 5b


a+b=4



[문제]
    철수는 학원에갈때는 걸어서 시속 3키로미터로 가고 
    올때는 자전가를 타고 시속 5키로미터로 왔다.
    가는데 오는데 시간을 합쳐서 4시간이 걸렸다고했을때
    집과 학원의 거리는 얼마인가? 
	가느데 걸린시간과 오는데 걸린시간도 구하시오.
	주석으로 풀이 하시오.
[정답]
	거리 : 7.5
	가는데 걸린시간 : 2시간 30분 
	오는데 걸린시간 : 1시간 30분 
"""
print("--문제2--")

'''
걷기 속력 시속 3km
자전거 속력 시속 5km

거리 = 시간 * 속력

총 시간(240) = x + z
x = 240 - z

총 거리 y

y = 3x

y = 3(240 - z)

y = 720 - 3z


집에서 학원
시간 = 속력 / 거리

240 - z = 3/720-3z
240 - z = 1/240 - 3z
2z = 1/240-240
z = 2/(1/240-240)
z = 

'''


# print("거리 :",,"km")
# print("가는데 걸린시간 :",,"시간",,"분")
# print("오는데 걸린시간 :",,"시간",,"분")

print("===================================")
"""
[문제]
	<택시요금표>

	기본 10km : 5000원
	기본이후  3km 마다 : 2200원 
	철수는 27km를 이동하였다. 택시요금은 얼마인가?
[정답]
	18200
"""
print("--문제3--")

기본요금 = 5000
기본거리 = 10
추가요금 = 2200
이동거리 = 27
추가이동거리 = 이동거리 - 기본거리
택시요금 = 0

if 기본거리 == 이동거리 : 
    택시요금 = 5000
    print("택시 요금은", 택시요금 ,"원 입니다.")

else :
    if 추가이동거리 % 3 == 0 :
        택시요금 = 기본요금 + (추가이동거리 // 3 * 추가요금)
    else :
        택시요금 = 기본요금 + ((추가이동거리 // 3 +1) * 추가요금)
    print("택시 요금은", 택시요금 ,"원 입니다.")

print("===================================")
"""
[문제]
	철수의 빌딩청소아르바이트 
	철수는 빌딩청소 아르바이트를 한다. 
	철수가 청소할 빌딩은 지하 -4층에서 지상 16층 빌딩이다.
	철수는 -4층부터 3층마다 청소하기로하였다. 
	철수가 청소하는 층을 전부 출력하시오.
	단, 빌딩의 0층은 없다. 	
	-4 -3 -2 -1 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16중 철수가 청소할층은아래와같다.
[정답]
	-4 , -1 , 3 , 6 , 9 , 12 , 15
"""
print("--문제4--")

min = -4
max = 16

while min <= max:
    if min == -1:
        print(min)
        min+=4
    print(min)
    min += 3
    




print("===================================")