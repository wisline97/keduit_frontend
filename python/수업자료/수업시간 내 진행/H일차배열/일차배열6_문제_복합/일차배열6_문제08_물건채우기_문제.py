'''
	[문제] 
		철수는 편의점에서 아르바이트를 하고 있다. 
		오늘 장사가 잘돼서 라면이 많이 판매되었다.
		라면 진열장에 라면들이 전부 채워질 수 있도록 라면을 채워보자.
		
		라면 진열장은 한 칸에 최대 5개씩 진열할 수 있으며,
		재고는 6개 밖에 없고 앞에서부터 순차적으로 채워 넣는다. 
		재고를 다 채웠을 때 라면 진열장의 모습을 출력하시오.
	[정답] 
		list = [3,5,2,1,2]
		count = 6
  
		1번은 3이므로 2개를 추가해 ==> -2
		2번은 5이므로 0개를 추가해 ==> -0
		3번은 2이므로 3개를 추가해 ==> -3
		4번은 1이므로 4개를 추가해야되지만 재고가 1개밖에없어서 -1	
		최종으론 [5,5,5,2,2] 가된다. 
'''

list = [3, 5, 2, 1, 2]
count = 6
max = 5
need = 0

for i in range(len(list)):
	if list[i] >= 5:
		print(i+1,"번째 진열장에 필요한 재고 개수:", 0,"개", end = " ")
		pass

	elif list[i] < 5:
		need = max - list[i]
		print(i+1,"번째 진열장에 필요한 재고 개수:", need,"개", end = " ")

		if count < need:
			print("필요한 라면 개수보다 재고 개수가 적습니다.")
			print("남은 재고", count, "개 만큼만 채웁니다.")
			list[i] += count
			count = 0

		else:
			list[i] += need
			count -= need
	if count == 0:
		print(i+1,"번째 진열장을 채울 재고가 없습니다.")
		break
	print("남은 재고:", count,"개")

print("==============")
print("진열장 현황")
print("==============")

for i in range(len(list)):
	print(i+1,"번 째 진열장 라면 개수:", list[i],"개")