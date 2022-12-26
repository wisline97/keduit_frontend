import random
print("=============================================================================")
"""
    [면접문제1]
        a에 랜덤숫자 (1~100) 사이의 값 20개를 저장하고 다음 조건대로 모두 출력하시오.

        [1] 최소값 [2] 최대값  [3] 합계 [4] 평균 [5] 중간값 
"""
max = 20
a = []
total = 0
for i in range(max):
    random_num = random.randint(1,100)
    a.append(random_num)
    total += random_num
average = total/max

min = 0
max = 0

for i in range(len(a)):
    if max < a[i]:
        max = a[i]

for i in range(len(a)):
    if i == 0 and max > a[i]:
        min = a[i]
    elif min > a[i]:
        min = a[i]

center = len(a) // 2 - 1

print("[0] a 배열:", a)
print("[1] 최소값:", min)
print("[2] 최대값:", max)
print("[3] 합계:", total)
print("[4] 평균:", average)
print("[5] 중간값:", a[center])

print("=============================================================================")
"""
    [면접문제2]
        b 에 랜덤 숫자 (0~9)사이의 값을 5개 저장하고 그래프로 표현하시오.

    [예시]
        b = [5,6,3,0,9]
    [출력]
        5*****
        6******
        3***
        0
        9*********
"""
max = 5
b = []

for i in range(max):
    random_num = random.randint(0,9)
    b.append(random_num)
print("[0] 배열 b:", b)
print("[1] 그래프 출력:")
for i in range(len(b)):
    print(b[i], end="")
    for y in range(b[i]):
        print("*", end="")
    print()

print("=============================================================================")
"""
    [면접문제3]
        랜덤으로 숫자 (1~5) 을 10번 출력하고 각각 몇번씩 나왔는지 출력하시오.
    [예시]
        c = [1,4,4,5,4,3,3,1,2,2]
    [결과]
        1 : 2번
        2 : 2번
        3 : 2번
        4 : 3번
        5 : 1번 
"""
max = 10
c = []

for i in range(max):
    random_num = random.randint(1,5)
    c.append(random_num)
print(c)
for i in range(5):
    i += 1
    count = 0
    print(i,": ",end="")
    for y in range(len(c)):
        if i == c[y]:
            count += 1
    
    print(count,"번")
print("=============================================================================")

"""
    [면접문제4]
        숫자 1과 2는 한쌍이며, 순서는 1다음에 2가 바로있어야한다.  
        다음 리스트에서 1과2가 붙어있는걸 한번이라고했을때 몇번 반복되는지 출력하시오.
    [예시1]
        [3,1,2,1,2,5] => 2번
    [예시2]
        [1,1,2,4,3,4] => 1번 
"""
test1 = [3,1,2,1,2,5]
test2 = [1,1,2,4,3,4]

i = 0
count1 = 0

while True:
    if test1[i] == 1:
        if test1[i+1] == 2:
            count1 += 1

    i+=1

    if i == 5:
        break

y = 0
count2 = 0

while True:
    if test2[y] == 1:
        if test2[y+1] == 2:
            count2 += 1

    y+=1

    if y == 5:
        break

print("test1:",test1,count1,"번")
print("test2:",test2,count2,"번")
print("=============================================================================")