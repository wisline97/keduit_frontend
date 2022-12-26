'''
[최대값]
    [1] 숫자 3개를 랜덤으로 저장한다. (-100 ~ 100 사이의 숫자)
    [2] 3개의 랜덤 숫자를 비교한다.
    [3] 가장 작은 수(MIN)를 출력한다.    
'''
import random

num1 = random.randint(-100, 100) 
num2 = random.randint(-100, 100) 
num3 = random.randint(-100, 100) 

print(num1,num2, num3)

min = num1

if min > num2 :
    min = num2

if min > num3 :
    min = num3


print(min)