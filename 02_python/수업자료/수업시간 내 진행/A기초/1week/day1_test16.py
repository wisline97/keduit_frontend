'''
  	[문제 1]
	   철수는 놀이공원에 갔다. 
	   놀이공원 입장료는 15000원이다.
	   철수는 이런저런 할인을 받아서 9000원에 입장했다.
	   몇 퍼센트 할인받은 것인지 구하시오.
	   
	[정답] 
		40
'''
pee = 15000
discount = pee - 9000
percent = discount / pee * 100


print("1.",percent, "%")

print("===================================")

'''
	[문제 2-1]
		철수가 농구 연습을 하고 있다.
		12번을 슛 시도를 했다.
		슛 한 번의 퍼센트는 얼마인지 구하시오.
		소수점 두 자리까지 구하시오.
		
        [정답 2-1]
        8.33

	[문제 2-2]
		12번의 슛이 100퍼센트라고 했을 때, 1퍼센트는 슛 몇 번인지 구하시오.
		소수점 두 자리까지 구하시오.
		
        [정답 2-2]
        0.12
        
'''
shoot_percent = round(100 / 12, 2)

print("2-1.",shoot_percent, "%")

shoot_percent = round(12 / 100, 2)

print("2-2.",shoot_percent, "%")


print("===================================")


'''
	[문제 3] 
		철수네 반은 학생이 40명이다.
	 	철수, 영희, 민수는 반장선거에 나갔다.
	 	민수는 득표를 40%를 획득했고, 
	 	영희는 9표를 얻었다.
	 	나머지는 철수가 득표했다.
	 	철수의 득표수를 구하시오.
	 	 
	 [정답]
	 	15
'''
total = 40
minsu = total* 0.4
younghee = 9
chulsu = total - minsu - younghee

print("3.",chulsu)

print("===================================")

'''
	[문제 4]
		사과 8개의 무게는 1056g이다.
		배 1개는 사과 1개의 117%의 무게를 갖고 있다.
		사과 5개 배 7개를 구입하였다. 
		과일전체의 총무게를 구하시오. 
		소수점 두 자리까지 구하시오.
		
	[정답 4]
		1741.08
'''


apple = 1056 / 8
pear = apple * (117/100)
total = (apple*5)+(pear*7)
print("4.",total)


print("===================================")

'''
	[문제 5]
		상점에 과일이 250개가 있다. 
		그중에 오전에 84퍼센트가 팔렸고, 
                나머지 16퍼센트는 오후에 다 팔렸다.
		오전에 팔린개수 에서 오후에 팔린 개수의 차이는 
                얼마인지 구하시오.
		
	[정답]
		170
'''

total = 250
morning = total * (84/100)
afternoon = total * (16/100)
diff = morning - afternoon

print("5.", diff)

print("===================================")

'''
	[문제 6] 
		내 연봉에서 세금 10%를 제외했더니 1350만원이다.
		세금을 제외하기 전 내 월급은 얼마인지 구하시오.
		
	[정답] 
		125
'''

money = 1350
month = ((money/9)+money) / 12

print("6.", month)

print("===================================")

'''
	[문제 7]	
		다음은 오늘 우유 상점 매출 결과이다.
		오전에는 전체 우유의 16퍼센트를 팔았다.
		오후에는 전체 우유의 15퍼센트를 팔았다.
		현재 남은 우유는 345개이다.		 		
		오늘 전체 우유 수를 구하시오.
		
	[정답] 
		500
'''

rest = 345
total = rest / 0.69

print("7.", round(total,0))

print("===================================")

'''
	[문제 8] 
	  	어느 도시에 전체 인구가 400000명이다. 
                그중 나이가 19세 이하 인구는 35%이다.
                그리고 나이가 40세 이상 인구는 25%이다.	      
	 	위 도시의 19세 이하 인구에서 40세 이상 인구수를 뺀 인구수를 구하시오.		 
	[정답] 
		40000	    
'''

total = 400000
teenager = total * 0.35
mid_age = total * 0.25  
answer = teenager - mid_age

print("8.", answer)

print("===================================")

'''		
	[문제 9]
        책이 총 78page이다. 
        [9-1] 철수는 책을 64page 읽었다. 몇 퍼센트 읽은 것인가?	
            소수점 두 자리까지 구하시오.		
        [9-2] 철수는 책을 30퍼센트 읽었다. 현재 페이지는 몇인가?		
    [정답]
        [1] 82.05
        [2] 23.4
'''

total_page = 78
percent = round(64 / 78 * 100, 2)
page = 78 * 0.3

print("9-1.", percent)
print("9-2.", page)

print("===================================")

'''
	[문제 10]
 		철수네 반은 학생이 40명이다.
 	 	철수, 영희, 민수 이렇게 세 학생은 반장선거에 출마했다.
 	 	민수는 득표를 전체 중 40%를 획득했고, 
 	 	영희는 9표를 획득했다.
 	 	나머지는 철수가 득표했다.
 	 	철수의 전체 득표는 몇 퍼센트 인지 구하시오. 	
 	 	
    [정답] 
        37.50
'''

total = 40
minsu = 40 * 0.4
younghee = 9
chulsu = total - minsu - younghee
percent = chulsu / total * 100

print("10.", percent)

print("===================================")

'''
  	[문제 11]
  		과일 상점에 과일 250개가 있다. 
  		그중에 오전에 120개가 팔렸고 오후에는 80개가 팔렸다.
  		남은 과일은 전체 과일의 몇 퍼센트인지 구하시오.
  		
  	[정답] 
  		20
'''

total = 250
morning = 120
afternoon = 80
rest = total - morning - afternoon
percent = rest / total * 100

print("11.", percent)

print("===================================")

'''
	[문제 12]
		철수 반 학생은 16명이다.
		8명은 양로원에 봉사활동을 다녀왔고,
		4명은 지하철 봉사활동을 다녀왔다. 
		봉사활동을 다녀오지 않은 
		학생의 비율은 몇 퍼센트인지 구하시오.
		소수점 두 자리까지 구하시오. 
		
	[정답] 
		25.00
'''

total = 16
old_volunteer = 8
sub_volunteer = 4
total_volunteer = old_volunteer+sub_volunteer
non_volunteer = total - total_volunteer
percent = non_volunteer / total * 100

print("12.", percent)

print("===================================")


