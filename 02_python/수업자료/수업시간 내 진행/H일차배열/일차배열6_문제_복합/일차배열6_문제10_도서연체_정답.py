'''
	[문제]
		철수는 도서관에서 책을 한 권 빌렸다. 
		빌린 날짜는 2021년 10월 10일이고, 대여 일수는 20일이다. 
		도서가 연체되면 연체 비용은 하루에 100원이다.
		오늘은 2022년 2월 25일 이라고 할 때, 지급해야 하는 비용은 얼마인지 구하시오.

		또한 1년 1월1일이 월요일이라고하면, 오늘은 무슨 요일인지 구하시오.
		단, 윤년은 계산하지 않는다. 
        (윤년을 빼기때문에 실제 날짜와 맞지않다. 추후달력만들때는 적용할예정))
	[정답]
		11800
'''
monthList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

rentYear = 2021
rentMonth = 10
rentDay = 10
total1 = 0

total1 = 0
rentyeartoday = (rentYear - 1)* 365  # 1년1월1일 부터 2020년 12월31일 까지 총날 

rentmonthtoday = 0
for i in range(rentMonth-1): # 2021년 1월 1일 부터 9월 30일까지 총날 
    rentmonthtoday += monthList[i]

rentdaytoday = 0
rentdaytoday += rentDay # 10일 더하기

total1 = rentyeartoday + rentmonthtoday + rentdaytoday

print(total1) # 737583 빌린날을 1년 1월 1일부터 계산한것 



thisYear = 2022
thisMonth = 2
thisDay = 25

total2 = 0
total2 = total2 + ((thisYear - 1 ) * 365)

for i in range(thisMonth-1):
    total2 += monthList[i]

total2 += thisDay

print((total2 - total1 ) * 100)

print("total : " , total2)
if total2 % 7 == 1:
    print("월")
if total2 % 7 == 2:
    print("화")
if total2 % 7 == 3:
    print("수")
if total2 % 7 == 4:
    print("목")
if total2 % 7 == 5:
    print("금")
if total2 % 7 == 6:
    print("토")
if total2 % 7 == 0:
    print("일")