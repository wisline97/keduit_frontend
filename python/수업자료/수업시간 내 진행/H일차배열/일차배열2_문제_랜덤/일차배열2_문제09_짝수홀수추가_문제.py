'''
	[문제]
		두 개의 변수 a, b에 숫자를 랜덤(1~9 사이의 숫자)으로 저장한다.
		두 변수 중 a 가 값이 더 크면 arr1 배열에 저장한다.
		b의 값이 더 크면 arr2 배열에 저장한다. 
		앞에서부터 순차적으로 저장한다. 
		만약에 값이 같으면 둘 다 저장한다. 
		총 다섯 번을 반복하고 배열을 출력하시오.
		
		[예시]
            a = [4, 3, 8, 3, 7]
            b = [5, 4, 8, 9, 7]
            arr1 = [8, 7]
            arr2 = [5, 4, 8, 9, 7]
'''

import random

a = []
b = []

arr1 = []
arr2 = []

i = 1

while i <= 5:
    num1 = random.randint(1,9)
    num2 = random.randint(1,9)
    a.append(num1)
    b.append(num2)
    i += 1

print("a배열:",a)
print("b배열:",b)

y = 0

for y in range(len(a)):
	if a[y] > b[y]:
		arr1.append(a[y])

	if a[y] < b[y]:
		arr2.append(b[y])
	if a[y] == b[y]:
		arr1.append(a[y])
		arr2.append(b[y])


print("arr1 배열:", arr1)
print("arr2 배열:", arr2)