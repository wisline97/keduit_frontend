"""
    [문제]
        아래 리스트들은 학생들의 데이터이다. 
        학생두명의 국어 점수가 서로 바뀌어서 잘못 저장되었다. 
        랜덤으로 번호두개를 저장후 각 번호의 해당하는 국어점수를  교환후 출력하시오.

    [예시]
        1001 , 1003
        stkor = [30,20,10,40]
"""
import random

stno = [1001, 1002, 1003, 1004]
stname = ["김철수" , "이만수" , "신정아" , "이영희"]
stkor = [10 , 20 , 30 , 40]
steng = [60 , 80 , 32 , 13]

idx = len(stno) - 1

check = False

while check == False:   
    num1= random.randint(0,idx)
    num2= random.randint(0,idx)

    if num1 != num2:
        check = True

print("=====================================================================")
print(stno[num1],"번",stname[num1],"학생의 국어 점수와")
print(stno[num2],"번",stname[num2],"학생의 국어 점수를 서로 교환합니다")
print("=====================================================================")
print(stno[num1],"번",stname[num1],"학생의 기존 점수는",stkor[num1],"점")
print(stno[num2],"번",stname[num2],"학생의 기존 점수는", stkor[num2],"점")

temp = stkor[num1]
stkor[num1] = stkor[num2]
stkor[num2] = temp

print("=====================================================================")
print("두 학생의 바뀐 점수")
print("=====================================================================")
print(stno[num1],"번",stname[num1],"학생의 바뀐 점수는",stkor[num1],"점")
print(stno[num2],"번",stname[num2],"학생의 바뀐 점수는", stkor[num2],"점")


