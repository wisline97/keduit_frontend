"""
[문제]
    아래 리스트에 랜덤숫자 (1~30) 을  10개 저장한다. 
    단, 홀수만 저장하고 , 중복숫자는 없어야 한다. 
[예시]
    a = [29, 1, 5, 9 , 21, 25, 7, 3, 13, 15]

"""

import random
a = []
count = 0

i = 0

while True:
    num = random.randint(1,30)
    if i != 0:
        if num % 2 != 0:
            a.append(num)
            count += 1
    if count == 10:
        break

    i+=1

비교대상 = 0
배열순회 = 1
똑같은숫자개수 = 0

while True:
    if 배열순회 >= 10:
        break
    if a[비교대상] == a[배열순회]:
        del a[배열순회]
        num = random.randint(1,30)
        a.append(num)
        똑같은숫자개수 +=1

    
    배열순회 += 1
    




print(a)
print(똑같은숫자개수)


"""
[설명]
    a는 잠깐 기다린다. 
    [1] b배열을 하나더 만들어 1~30사이의 홀수만 저장한다.
    [2] b배열을 셔플한다. 
    [3] b배열에서 10개만 a에 저장한다. 
"""
# import random

# a = []
# b = []
# i = 1
# while i <= 30:
#     if i % 2 == 1:
#         b.append(i)
#     i += 1
# print(b)

# i = 0
# while i < 10000:
#     r = random.randint(0, 14)
#     temp = b[0]
#     b[0] = b[r]
#     b[r] = temp
#     i += 1
# print(b)

# for i in range(10):
#     a.append(b[i])
# print(a)