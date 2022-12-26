'''
    [문제]  
        아래 a리스트는 순서대로 값이 저장되어있다.
        랜덤(1~70)숫자 하나를 저장 후,
        a리스트의 값들 사이에 저장하려고 한다. 
        저장조건은 a리스트의 바로 앞의 값 보다는 크고 
        바로 뒤의 값 보다는 이하인 위치에 삽입 후 출력하시오.
    [예시]
        r = 54
        a = [10,20,30,40,50,54,60]

'''
import random
num = random.randint(1,70)
#random.randint(1,70)
a = [10, 20, 30, 40, 50, 60]

print(num)


idx = len(a) - 1

temp = a[idx]
i = 0

while True:
    if a[i] > num:
        a.insert(i,num)
        break
    if num >= max(a):
        a.append(num)
        break
    else:
        i+= 1
print(a)
