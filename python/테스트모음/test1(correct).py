#정상작동 코드

import random

count = 0
run = 1
answer = 0

print("정상작동코드")

while run == 1:
    주사위1=random.randint(1,6)
    주사위2=random.randint(1,6)

    print(주사위1,",",주사위2)

    if 주사위1 != 주사위2:
        if 주사위1 > 주사위2:
            answer = 주사위1 - 주사위2
        if 주사위2 > 주사위1:
            answer = 주사위2 - 주사위1

    if 주사위1 == 주사위2:
            answer = 0

    if answer != 1:
        count = 0

    if answer == 1:
        count += 1

    if count == 2:
        run = 0

    print("카운트:",count)