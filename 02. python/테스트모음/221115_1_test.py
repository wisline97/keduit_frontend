'''
	[문제]
		
        랜덤숫자(1~9)사이의 숫자를  여섯개를 출력하고 
        각 숫자를 더하거나 빼는 식을 만들어 출력하시오..
        랜덤숫자가 홀수이면 더하기를 하고,
        랜덤숫자가 짝수이면 빼기를 하시오.
        단, 마지막숫자는 영향이 없다. 

        5 7 6 2 3 1 이라고하면

        5는 홀수이므로 더하기
        7은 홀수이므로 더하기
        6은 짝수이므로 빼기
        2는 짝수이므로 빼기
        3은 홀수이므로 더하기
        1은 마지막이므로 영향이 없다. 

        5 + 7 + 6 - 2 - 3 + 1 이된다. 

'''

'''
첫번째 시도
=>  이상 작동 더하기, 빼기 부호는 정상적으로 출력되나
    total 값이 식과 맞지 않음

import random

max = 6
total = 0
for i in range(max):
    num = random.randint(1,9)
    if num % 2 != 0:
        total += num
        if i != 5:
            print(num, end = " + ")
        if i == 5:
            print(num, end = " ")
    else:
        total -= num
        if i != 5:
            print(num, end = " - ")
        if i == 5:
            print(num, end = " ")

print("=",total)

'''

'''
두번째 시도
=>  1. 반복문이 처음으로 실행될 때
       total 값이 0인 상태에서 num값을 토탈에 더하거나 빼려고 하는 바람에 total 값이 틀린가 싶어서
       total 값에 첫 num 값을 할당하도록 수정함
    2. 현재의 num 값이 아닌 이전 num값(==num2)을 토대로 판별하여 total에 num을 더하거나 뺄 수 있게 num2 라는 변수를 추가

import random

max = 6
total = 0
for i in range(max):
    num = random.randint(1,9)
    if i == 0:
        total = num
    elif num2 % 2 != 0:
        total += num
        if i != 5:
            print(num, end = " + ")
        if i == 5:
            print(num, end = " ")
    elif num2 % 2 == 0:
        total -= num
        if i != 5:
            print(num, end = " - ")
        if i == 5:
            print(num, end = " ")
    num2 = num


print("=",total)
'''

'''
세번째 시도
=>  i가 0일 때(반복문이 처음 실행될 때)
    현재 num 값을 출력하지 않아 식에 숫자가 5개만 나오는 문제 발생
    if i == 0 라는 조건문에 total에 num 값을 할당하고,
    만약 첫 num 값이 홀수면 num 뒤에 +를 출력
    만약 첫 num 값이 짝수면 num 뒤에 -를 출력

    정 상 작 동~
'''

import random

max = 6
total = 0
for i in range(max):
    num = random.randint(1,9)
    if i == 0:
        total = num
        if num % 2 != 0:
            print(num, end = " + ")
        else:
            print(num, end = " - ")
    elif num2 % 2 != 0:
        total += num
        if i != 5:
            if num % 2 != 0:
                print(num, end = " + ")
            if num % 2 == 0:
                print(num, end = " - ")
        if i == 5:
            print(num, end = " ")
    elif num2 % 2 == 0:
        total -= num
        if i != 5:
            if num % 2 != 0:
                print(num, end = " + ")
            if num % 2 == 0:
                print(num, end = " - ")
        if i == 5:
            print(num, end = " ")
    num2 = num

print("=",total)