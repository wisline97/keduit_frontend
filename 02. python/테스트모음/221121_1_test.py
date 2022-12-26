"""
    [문제]
        아래는 우리반 학생들 이름을 배열로 나열한것이다. 
        팀포트폴리오를 위해 3명씩 5팀을 만들려고한다. 
        실행할때마다 한팀에 3명씩 5팀을 만들어, 
        각각 , a,b,c,d,e 배열에 저장후 출력하시오. 
        단, 매번 팀원은 랜덤으로 배정된다. 
"""
import random
arr = [
"권종률" , "김식" , "김유정" , 
"김지현" , "송민수" , "신정규" ,
"안성현" , "안지선" , "양나비" ,
"유재형" , "이주호" , "장준영" , 
"황지현" , "김사라" , "이근일"]

arr2 = []
idx = len(arr) - 1


for i in range(idx + 1):
    r1 = random.randint(0, idx)
    if i != r1:
        temp = arr[i]
        arr[i] = arr[r1]
        arr[r1] = temp
    else:
        r1 = random.randint(0, idx)

print(arr)

count = 0

a = []
b = []
c = []
d = []
e = []

for i in range(idx + 1):
    if count < 3:
        a.append(arr[i])
        count += 1
    elif count >= 3 and count < 6:
        b.append(arr[i])
        count += 1
    elif count >= 6 and count < 9:
        c.append(arr[i])
        count += 1
    elif count >= 9 and count < 12:
        d.append(arr[i])
        count += 1
    elif count >= 12 and count < 15:
        e.append(arr[i])
        count += 1

print("a팀:",a)
print("b팀:",b)
print("c팀:",c)
print("d팀:",d)
print("e팀:",e)