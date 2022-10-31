'''
    [문제]
        변수에 1부터 100 사이의 랜덤 숫자를 저장한다.
        저장한 숫자의 값이 4의 배수이면 "True"
        4의 배수가 아니면 "False" 출력하시오.
'''

import random

a = random.randint(1,100)

print(a)

if a % 4 == 0:
    print(True)

if a % 4 != 0:
    print(False)