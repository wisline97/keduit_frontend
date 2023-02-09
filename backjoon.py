""" score = int(input())

if score >= 90:
    print("A")
elif score >=80 and score <90:
    print("B")
elif score >=70 and score <80:
    print("C")
elif score >=60 and score <70:
    print("D")
else:
    print("F") """

""" string = "The Curious Case of Benjamin Button"
arr = string.split()
print(len(arr)) """


"""
비효율적인 코드
word =  input().upper()

word_len = len(word)
arr = []

for i in range(word_len):
    check = True
    for y in range(len(arr)):
        if word[i] == arr[y]:
            check = False

    if check == True:
        arr.append(word[i])


cnt_arr = []
arr_len = len(arr)

for x in range(arr_len):
    cnt = 0
    for z in range(word_len):
        if word[z] == arr[x]:
            cnt += 1

    cnt_arr.append(cnt)

max = 0
max_idx = 0
cnt_len = len(arr)
for w in range(cnt_len):
    if(cnt_arr[w] > max):
        max = cnt_arr[w]

count = 0
for w in range(cnt_len):
    if(cnt_arr[w] == max):
        max_idx = w
        count += 1

if count == 1:
    answer = arr[max_idx]
else:
    answer = "?"

print(answer.upper()) """


"""
통과

word = input().upper()
word_len = len(word)
alphabet = ["A","B","D","C","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
alphabet_len = len(alphabet)
alphabet.sort()
cnt_arr = [0 for i in range(alphabet_len)]
cnt_len = len(cnt_arr)
# word 알파벳 수 세기
for i in range(word_len):
    for y in range(alphabet_len):
        if word[i] == alphabet[y]:
            cnt_arr[y] += 1

# Count max값 찾기
max = 0
max_idx = 0
count = 0
for i in range(cnt_len):
    if cnt_arr[i] > max:
        max = cnt_arr[i]
        max_idx = i

# max값이 중복되는지 체크
for i in range(cnt_len):
    if cnt_arr[i] == max:
        count += 1

if count == 1:
    answer = alphabet[max_idx]
else:
    answer = "?"

print(answer) """



""" num1,num2 = map(int,input().split())

if num1 < num2:
    print("<")
elif num1 > num2:
    print(">")
elif num1 == num2:
    print("==") """

""" # 과목 수
n = int(input())

# 점수 목록과 최고 점수
score = list(map(int, input().split()))
max_score = max(score) """

""" import math

# 과목 수
n = int(input())

# 점수 목록과 최고 점수
score = list(map(int, input().split()))
max_score = max(score)

# 조작한 점수 리스트
new_score = []
for i in range(n):
    new_score.append(round((score[i]/max_score) * 100, 2))


#평균 구하기
avg = sum(new_score)/n

print(avg) """

""" # 별 정상적으로 찍기
n = int(input())

for i in range(1,n+1):
    for y in range(i):
        print("*", end="")
    print() """

""" # 별 오른쪽 정렬 찍기

n = int(input())

for i in range(1,n+1):
    for y in range(n-i):
        print(" ", end="")
    for z in range(i):
        print("*", end="")
    print() """

""" list = []
for i in range(9):
    score = int(input())
    list.append(score)
max_score = max(list)
max_idx = list.index(max_score)

print(max_score)
print(max_idx+1) """

num = list(map(int, input().split()))
diff = [[num[0]-0,num[1]-0], [num[2]-num[0],num[3]-num[1]]]
mindiff = [min(diff[0]),min(diff[1])]
print(num)
print(diff)
print(min(mindiff))