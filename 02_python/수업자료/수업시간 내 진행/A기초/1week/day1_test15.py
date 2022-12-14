'''
	[문제 1]
		철수와 영희는 가위바위보 게임을 하고 있다. 
		규칙은 아래와 같다.	
		
		이기면 계단을 3칸 올라간다.
		비기면 계단을 1칸 올라간다. 
    지면  계단을 2칸 내려간다.
		
		철수는 4번 이기고, 2번 비기고, 3번 졌다.
		50번 계단에서 시작했을 때,
	 	철수는 몇 번째 계단에 있는지 구하시오.
	 	
	 [정답] 
        58
'''

win = +3
lose = -2
draw = +1
start_stairs = 50
chulsu = (4*win)+(2*draw)+(3*lose)
print("1.",start_stairs+chulsu, "번째")

print("===================================")

'''
	[문제 2]
		아래 변수 a 안에 15 이 저장되어있다. 
		값을 두 번 더 누적해서 저장하고 그 과정을 전부 출력한다. 
		a 변수 하나만 사용해야 한다. 
		값은 -3과 15를 누적한다.
	 	
	 [정답] 
	 	15
		12
		27
        
'''
print("2.")

a = 15
print(a)

a = a - 3
print(a)

a = a + 15
print(a)

print("===================================")

'''
	[문제 3] 
		철수와 영희는 50,000원을 가지고 있다. 
		철수와 영희는 같이 영화 1편을 관람했다.
		간식은 팝콘 1개와 콜라 2개를 사 먹었다.
		아래 힌트를 참고하여 남은 돈은 얼마인지 구하시오. 
		[힌트] 
			(1) 콜라 1개는 팝콘 1개보다 4,000원 싸다.
			(2) 영화 1편의 가격은 12,000원이다.
			(3) 팝콘의 가격은 영화의 6/10 가격이다.  
			
	[정답]
		12,400
'''

total = 50000
movie = 12000
popcorn = movie*0.6
coke = popcorn - 4000
change = total-(2*movie)-popcorn-(2*coke)


print("3. 남은 돈은", change , "원 입니다")

print("===================================")

'''
	[문제 4]
   		철수네 반 학생은 30명이다.
   		남학생은 16명이다.
   		이 중에서 남학생은 3명 , 
   	 	여학생은 남학생의 3배의 학생이 봉사활동을 하였다.
    	봉사활동을 하지 않은 여학생은 몇 명인지 구하시오.
    	
  	[정답] 
  		5
'''
total = 30
man = 16
woman = total - man
man_volunteer = 3
woman_volunteer = man_volunteer*3


print("4. 봉사활동을 하지 않은 여학생은", woman-woman_volunteer , "명 입니다")

print("===================================")

'''
 	[문제 5]
		철수네 반 학생은 31명이다.
		이 중에서 남학생은 3명, 
		여학생은 남학생의 3배의 학생이 봉사활동을 하였다.
		철수네 반에서 봉사활동을 하지 않은 학생과 
		봉사활동 한 학생의 차이는 얼마인지 구하시오.
	    
	[정답] 
		7
'''
total = 31
man_volunteer = 3
woman_volunteer = man_volunteer*3
non_volunteer = total - man_volunteer - woman_volunteer
total_volunteer = man_volunteer+woman_volunteer

print("5. 봉사활동을 한 학생과 그렇지 않은 학생의 차이는", non_volunteer-total_volunteer , "명 입니다")

print("===================================")

'''
	[문제 6]
		공장에서 장난감 1000개를 생산하는데,
		불량을 고려해 30개씩 더 만든다.
		장난감 하나 만드는데 비용이 42원일 때 
 		정상적인 장난감 12000개를 만들 때 필요한 총비용을 구하시오.	
 		
 	[정답]
 		519120
'''

toy_value = 42
order=12000
worthless_probability= 30 / 1000
toy_worthless = (worthless_probability*order)*toy_value
toy_ordertotal = order*toy_value+toy_worthless


print("6. 필요한 총비용은", toy_ordertotal , "원 입니다")

print("===================================")

'''
	[문제 7]
		귤 6개의 무게는 840g, 사과 3개의 무게는 750g 이다.
		귤 5개와 사과 4개의 무게 합을 구하시오.
		
	[정답]
		1700
'''
귤= 840/6
사과 = 750/3
무게합=(귤*5)+(사과*4)
print("7. 무게의 합은", 무게합 , "g 입니다")

print("===================================")

'''
	[문제 8] 
		소풍재료를 위해 김밥 재료를 구입하려고 한다. 
 		김밥 재료로는 햄과 계란 당근이 필요하다.
 		햄 1개의 가격은 2500원이고 총 4개 필요하다.
 		계란 한 판은 3000원이고 총 2판 필요하다.
 		당근 1개의 가격은 2000원이고 총 8개가 필요하다.
 		집에 냉장고를 열어봤더니 당근이 2개 햄이 1개 있었다. 
 		철수가 모자란 재료를 사는데 필요한 총금액을 구하시오. 
   		
 	[정답] 
 		25500
'''
meat = 2500
egg = 3000
carot = 2000
freezer = (carot*2) + meat
total=(meat*4)+(egg*2)+(carot*8) - freezer

print("8. 필요한 총금액은", total , "원 입니다")

print("===================================")

'''
	[문제 9]
		 철수는 운동을 위해 집에서 직진으로 1800m를 걸어간 후, 
		 집으로 돌아가기 위해 뒤돌아서 300m를 걸어갔다. 
		 철수는 힘들어서 잠시 쉬었다.
		 철수는 다시 일어나서 집으로 200m를  걸어갔을 때쯤,
		 아까 쉬었던 자리에 가방을 두고 온 것을 깨달았다.
		 철수는 다시 돌아가서 가방을 가지고 집으로 돌아왔다.
		 오늘 철수가 걸은 길이는 총 몇m 인지 구하시오.
		 
	[정답] 
		4000
'''

home_to_gym = 1800
gym_to_rest = 300
rest_to_home = home_to_gym - gym_to_rest
rest = 200

total = home_to_gym + gym_to_rest + (rest*2) +rest_to_home



print("9. 철수가 걸은 길이는 총", total , "m 입니다")

print("===================================")

'''
	[문제 10]
		철수는 집에서 학교까지 버스를 타고 다닌다.
		철수의 버스비는 1200원이다. 
		철수는 학교가 끝나면 바로 학원에 간다.
		학원에 갈 때는 지하철을 이용한다.
		지하철 요금은 1100원이다.
		철수가 학원에서 집으로 바로 올 때는 1300원의 차비가 든다.
		철수가 학교에서 집으로 바로 올 때는 1200원의 차비가 든다.
		학교는 월화수목금 매일 다닌다.
		학원은 월수금에만 다닌다.
		이번 달에 철수는 4주 동안 학교와 학원에 다녔다.
		이번 달 필요한 총차비를 구하시오.
		
	[정답] 
		62400
'''

bus = 1200
subway = 1100

home_to_school = bus
school_to_home = bus
school_to_lesson = subway
school_to_home = bus
lesson_to_home = 1300
school = 5
lesson = 3

month = 4

total = ((home_to_school*5)+(school_to_home*2)+(lesson_to_home*3)+(school_to_lesson*3))*4

print("10. 이번 달 필요한 총차비는", total , "원 입니다")

print("===================================")

'''
	[문제 11]
		현금이 10000원을 가지고,
		가격이 1200원인 과자 6개를 구입 후 거스름돈을 구하시오.
		단, 과자를 3개를 구입할 때마다 200원씩 할인해주는 행사를 진행 중이다. 
		
	[정답] 
		3200
'''

cash = 10000
snack_order = 6
snack_value = 1200
discount = (snack_order/3) * -200
total = cash - (snack_order*snack_value) - discount


print("11. 거스름돈은", total , "원 입니다")

print("===================================")
