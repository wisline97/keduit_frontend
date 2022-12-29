"""
    [문제]
        아래 리스트들은 학생들의 데이터이다. 
        학생두명의 국어 점수가 서로 바뀌어서 잘못 저장되었다. 
        랜덤으로 번호두개를 저장후 각 번호의 해당하는 국어점수를  교환하시오.
        그리고 교환한후에 국어점수와 영어점수의 총합이 1등인 학생의 이름을 출력하시오.
"""
import random

stno = [1001, 1002, 1003, 1004]
stname = ["김철수" , "이만수" , "신정아" , "이영희"]
stkor = [8 , 25 , 34 , 40]
steng = [60 , 30 , 32 , 23]

idx = len(stkor) - 1

num1 = random.randint(0,idx)
num2 = random.randint(0,idx)

while True:
    if num1 == num2:
        num1 = random.randint(0,idx)
        num2 = random.randint(0,idx)
    if num1 != num2:
        break
print("=====================================================================")
print(stno[num1],"번",stname[num1],"학생과",stno[num2],"번",stname[num2],"학생의 국어점수를 교환합니다.")
print("=====================================================================")
temp = stkor[num1]
stkor[num1] = stkor[num2]
stkor[num2] = temp

print(stno[num1],"번",stname[num1],"학생 국어점수:",stkor[num1],"점")
print(stno[num2],"번",stname[num2],"학생의 국어점수:", stkor[num2],"점")
print("=====================================================================")
total = []

for i in range(idx + 1):
    total.append(stkor[i]+steng[i])

max = 0
first = 0

for i in range(idx + 1):
    if total[i] > max:
        max = total[i]
        first = i

print("국어점수와 영어점수의 총합")

for i in range(idx + 1):
    print(stno[i],"번",stname)


print("국어점수와 영어점수의 총합이 1등인 학생은")
print(stno[first],"번", stname[first],"학생")