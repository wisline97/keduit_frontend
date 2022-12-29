"""
[문제]
    [내마음대로 주사위게임]
        내마음대로 주사위게임 은 a와 b가 주사위를 두개를 던진다.
        두개의 주사위중 하나를 랜덤으로 선택해서 제시한다.

        아래의 특별한 게임규칙에 따라 승패가 갈린다. 
       
        a는 주사위를 2개 던진다.
        b는 주사위를 2개 던진다.

        a와 b는 두 주사위중 하나를 랜덤 선택해서 제출한다. 

        <게임규칙>
            [1] 숫자가 둘다 짝수이면 둘중 큰수가 승리 , 숫자가 같으면 비김
            [2] 숫자가 둘다 홀수이면 둘중 작은수가 승리 , 숫자가 같으면 비김
            [3] 하나는 짝수이고 하나는 홀수이면 
                주사위 숫자와 상관없이 비긴다. 
"""
import random 
a1 = random.randint(1, 6)
b1 = random.randint(1, 6)
a2 = random.randint(1, 6)
b2 = random.randint(1, 6)

print(a1, a2 , b1 , b2)
sa = random.randint(1,2)
sb = random.randint(1,2)
ra = 0
rb = 0
if sa == 1:
    ra = a1
if sa == 2:
    ra = a2

if sb == 1:
    rb = b1
if sb == 2:
    rb = b2

print(ra , rb)

if ra % 2 == 0 and rb % 2 == 0:
    if ra > rb:
        print("ra승리")
    if ra < rb:
        print("rb승리")
elif ra % 2 == 1 and rb % 2 == 1:
    if ra < rb:
        print("ra승리")
    if ra > rb:
        print("rb승리")
else:
    print("비김")
    
"""
    [문제]
        반복문을 활용해서 1~99까지 반복한다.
        1~99사이의 숫자중에서 4 와 8 의 개수를 출력하시오.
    [주의]
        44 또는 48등과 같이 두개추가가 되는경우도 있다. 
    [정답]
        40
"""

i = 1
c = 0
while i <= 99:
    a = i // 10
    b = i % 10
    if a == 4 or a == 8:
        c += 1
    if b == 4 or b == 8:
        c += 1
    i += 1
print(c)