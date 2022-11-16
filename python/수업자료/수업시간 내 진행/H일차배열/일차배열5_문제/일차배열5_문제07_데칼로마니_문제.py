'''
	[문제]
		a 리스트가 데칼코마니인지 구하시오.
		데칼로마니이면 True를 출력 아니면 False 출력하시오.
		데칼코마니란? 절반으로 나눴을 때 서로 값들이 대칭이면 데칼코마니이다.

	[예시]	
		[1,5,4,4,5,1] True
		[1,5,4,3,5,1] False
'''


a = [1,2,3,4,4,3,2,1]

center = len(a) // 2
center_left_idx = center - 1
center_right_idx = center

count = 0

for i in range(center):
	if a[center_left_idx] == a[center_right_idx]:
		count += 1
	center_left_idx -= 1
	center_right_idx += 1


if count == center:
	print(a, True)
else:
	print(a, False)
