'''
    [문제]
        0에서 100 사이의 랜덤 숫자를 시험 점수로 저장한다.
        시험점수에 해당하는 학점을 출력하시오.
        아래는 점수표이다.
        100~91 이면 A학점,
        90~81  이면 B학점,
        80 이하는 "재시험"
        
        단, 만점이거나, A 학점과 B 학점의 일의 자리가 8점 이상이면 + 기호를 추가하시오.
        [예] 
            100 => A+
            88 ==> B+
            82 ==> B
            23 ==> 재시험
'''

import random

num = random.randint(0,100)
num1 = num % 10

print("당신의 시험점수는",num,"점 이므로")

if num >= 91 :
    if num1 >= 8 :
        print("A학점+ 입니다.")

    if num1 < 8 :
        print("A학점 입니다.")

if num>=81 and num <= 90 :
    if num1 >= 8 :
        print("B학점+ 입니다.")

    if num1 < 8 :
        print("B학점 입니다.")

if num <= 80:
    print("재시험을 치러야합니다.")