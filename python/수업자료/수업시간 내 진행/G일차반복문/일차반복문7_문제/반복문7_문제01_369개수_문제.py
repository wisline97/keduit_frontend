'''
    [문제]
        1. 1~100까지 반복한다.
        2. 각 수에 3이나 6이나 9의 개수를 누적해서 출력하시오. 

        [예시]
            3 1
            6 1
            9 1
            13 1
            16 1
            ...
            98 1
            99 2
'''

min = 1
max = 100
count = 0



while min <= max:
    min십의자리 = min // 10
    min일의자리 = min % 10

    if min십의자리 % 3 == 0 or min일의자리%3 == 0:
        count = 1

    if min>=10 and min십의자리 % 3 == 0 and min일의자리%3 == 0:
        count = 2

    if min<10 and min%3 == 0:
        print(min, count)

    if min>=10 and min일의자리 % 3 == 0 and min일의자리 != 0:
        print(min, count)

    min += 1


'''
while min <= 100:
    if min < 10 and min % 3 == 0:
        print(min, count+1)
    if min >= 10 and (min % 10)%3 == 0 :
        print(min, count+1)
    if (min // 10) % 3 ==0 and (min % 10)%3 == 0 :
        print(min, count+2)

    min += 1
'''