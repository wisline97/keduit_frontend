'''
    [가위바위보 하나빼기]
        a1 과 a2 는 a의 왼손과 오른손을 뜻한다. 
        b1 과 b2 는 b의 왼손과 오른손을 뜻한다.

        a1, a2 , b1 , b2 에 각각 랜덤숫자 (1~3)을 저장한다. 
        (1:가위 , 2:바위 , 3:보) 를뜻한다. 

        selecta 와 selectb 는 a 의 손과 b의 손을 결정하기위한변수이다. 
    

        selecta 에 왼손오른손을 결정하는 랜덤숫자(1,2)을 저장한다. 
        selecta 가  1이면 왼손의 숫자 a1 을 resulta 에 저장한다.
        selecta 가  2이면 오른손의 숫자 a2 를 resulta 에 저장한다. 

        selectb 에 왼손오른손을 결정하는 랜덤숫자(1,2)를 저장한다. 
        selectb가 1이면 왼손의 숫자 b1 을 resultb 에 저장한다. 
        selectb가 2이면 오른손의 숫자 b2 를 resultb 에 저장한다.

        마지막으로 resulta , 과 resultb 를 가지고 가위바위보 판별을 하면된다. 
'''
import random
a1  = random.randint(1,3)#왼손
a2 = random.randint(1,3)#오른손
b1 = random.randint(1,3)#왼손
b2 = random.randint(1,3) #오른손
selecta = random.randint(1,2)
selectb = random.randint(1,2)
#1:가위 , 2:바위 , 3:보
resulta = 0
resultb = 0
print(a1,a2,b1,b2)
if selecta==1:
    resulta=a1
if selecta==2:
    resulta=a2
if selectb==1:
    resultb=b1
if selectb==2:
    resultb=b2
print(resulta,resultb)


