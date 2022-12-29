'''
 	[문제]
		철수는 13살 철수의 아버지는 45살이다. 
		몇 년 후 철수의 아버지는 철수 나이의 3배가 될까요?

		위 식을 표현하고, 풀이 과정을 주석으로 작성하시오.
	[정답]
		3
'''



'''


3(chulsu + x) = father + x
3chulsu + 3x = father + x
3x - x = father - 3chulsu
2x = father - 3chulsu
x = (father - 3chulsu) / 2
x = (45 - 39) / 2
x = 3

'''

x = 3
chulsu = 13
father = 45

print(3 * (chulsu + x) == father + x)