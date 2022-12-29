print("===================================")

"""
[문제]
    주차장에 135분을 주차하였다. 얼마를 지불해야하는가?
    <주차요금>
    기본 1시간 요금 : 3000원
    1시간 초과시 5분마다 500원씩 추가 
"""

pee = 3000

park_time = 135
park_time_h = park_time // 60
park_time_m = park_time % 60
park_time_s = (park_time * 60)% 60

over_pee = 500 * (park_time_m // 5)

total = (park_time_h*pee)+over_pee

print("당신의 주차시간은", park_time_h, "시간", park_time_m, "분", park_time_s, "초 입니다" )
print("1.", total , "원")

print("===================================")

"""
[문제]
    철수는 3분17초 동안 1000m를 달렸다. 
    영희는 4분28초 동안 1000m를 달렸다. 
    둘다 200m를 달렸을때 철수가 영희보다 몇초가 빠른지 출력하시오. 
    단, 두사람은 항상 일정한속도로 달린다. 
    소수점 두자리로 출력하시오.
"""

chulsu_m = 3
chulsu_s = (chulsu_m*60) + 17

younghee_m = 4
younghee_s = (younghee_m*60) + 28

chulsu_speed = chulsu_s / 1000
younghee_speed = younghee_s / 1000

chulsu_200 = chulsu_speed * 200
younghee_200 = younghee_speed * 200

diff = round(younghee_200 - chulsu_200,2)

print("2.", diff, "초")
print("===================================")

"""
[문제]
    책이 총 178page 이다.
    철수는 43page 를 읽었다. 몇퍼센트를 읽은 것인가?
    소수점 두자리까지 구하시오.
"""

total = 178
chulsu = 43

percent = round(chulsu / total * 100, 2)

print("3.", percent, "%")

print("===================================")

"""
[문제]
    놀이공은 입장료는 8900원이다.
    철수는 40퍼센트 할인을 받았다.
    철수가 지불한 금액은 얼마인가?   
"""

pee = 8900
discount = 8900*0.4
chulsu = pee- discount



print("4.", chulsu,"원")
print("===================================")