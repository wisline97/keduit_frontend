'''
    [문제]
        랜덤 숫자(1~5)를 한 개 저장한다. 
        랜덤 숫자만큼 반복문을 돌리고, 
        저장한 랜덤 숫자를 계속 저장한다.
    [예시]
        r = 3 
        arr = [3,3,3]
    [예시]
        r = 5
        arr = [5,5,5,5,5]  
'''
import random

arr = []
num = random.randint(1,5)

print("랜덤숫자는", num)

i = 1
while i <= num: 
    arr.append(num)
    i += 1

print(arr)
