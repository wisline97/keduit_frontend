'''
	[문제] 
		1~45사이의 랜덤값 6개를 lotto에 저장하려 한다.
		단, 중복되는 숫자는 없어야 하며,
		내림차순 정렬 후 출력하시오.
	[예시]
        [40, 38, 27, 26, 18, 5]
'''
lotto = []
count = 0
import random

for i in range(6):
	num = random.randint(1,45)
	lotto.append(num)

for y in range(len(lotto)):
	check = False
	for j in range(y+1):
		if y != j and lotto[y] == lotto[j]:
			check = True
	if check == True:
		while True:
			check1 = False
			num = random.randint(1,45)
			for h in range(len(lotto)):
				if lotto[h] == num:
					check1 = True

			if check1 == False:
				lotto[y] = num
				break

for i in range(len(lotto)):
	for y in range(i + 1):
		if i != y:
			if lotto[i] > lotto[y]:
				temp = lotto[i]
				lotto[i] = lotto[y]
				lotto[y] = temp

print(lotto)


'''
i = 0
while True:
	num = random.randint(1,5)
	check = False

	if len(lotto) == 0:
		lotto.append(num)
		count += 1

	if len(lotto) != 0 and check == False:
		lotto.append(num)
		count += 1

	if count == 6:
		break
print(lotto)
'''
'''
while True:
	num = random.randint(1,45)
	check = False

	for i in range(len(lotto)):

	if check == False:
		lotto.append(num)
		count += 1

	if count == 6:
		break

'''