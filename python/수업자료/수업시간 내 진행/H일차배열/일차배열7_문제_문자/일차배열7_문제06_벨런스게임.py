"""
    [문제]
        아래는 철수와 영희 가 데이트 1주년을 기념하여 벨런스게임을하기로했다.
        선택은 전부 랜덤으로 하고 철수와 영희가 몇개 맞았는지 출력하시오. 
"""
import random
sample1 = [
        "양념치킨", 
        "내 여친(남친)이 간첩인것을 알았다면? 신고한다", 
        "짬뽕",
        "평생 겨울",
        "무없이 치킨먹기",
        "평생 컴퓨터없이 살기",
        "겨울에 에어컨",
        "아이스아메리카노"]
sample2 = [
        "후라이드치킨", 
        "신고 안한다 (단, 신고 포상금 5억)",
        "짜장면",
        "평생 여름",
        "콜라없이 햄버거먹기", 
        "평생 핸드폰없이 살기",
        "여름에 히터",
        "뜨거운아메리카노"]
철수 = []
영희 = []
랜덤 = random.randint(0,1)
idx = len(sample1) - 1
i = 0
while i < idx:
        랜덤1 = random.randint(0,1)
        if 랜덤1 == 0:
                철수.append(sample1[i])
        else:
                철수.append(sample2[i])
        i += 1
y = 0
while y < idx:
        랜덤2 = random.randint(0,1)
        if 랜덤2 == 0:
                영희.append(sample1[y])
        else:
                영희.append(sample2[y])
        y += 1
j = 0
count = 0
for j in range(idx):
        if 철수[j] == 영희[j]:
                count += 1
print(철수)
print(영희)
print("철수와 영희가 서로 같은 대답을 한 횟수는:",count,"회")

