'''
    [문제]
        [조건1] 리스트에 랜덤숫자(1~100) 5개를 추가하고,
        [조건2] 랜덤으로 위 값 중 한 개만 출력하시오. 
    
    [예시]
        a = [1, 43, 22, 77 ,44]
        출력 : 22
'''
import random

a = []



for i in range(5):
    num = random.randint(1,100)
    a.append(num)

print("List a:",a)

num2 = random.randint(0,len(a)-1)

print("index:",num2)

print(num2,"of list a:", a[num2])