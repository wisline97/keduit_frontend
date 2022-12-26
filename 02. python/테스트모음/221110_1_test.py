import random

run = 1

while run == 1:
    #가위바위보 고르기
    print("==========================")
    print("!가위 바위 보!")
    print("==========================")
    A_a = random.randint(0,2)
    A_b = random.randint(0,2)
    B_a = random.randint(0,2)
    B_b = random.randint(0,2)

    #가위바위보 판별 시작
    if A_a == 0:
        A_낸거1 = "가위"
    if A_a == 1:
        A_낸거1 = "바위"
    if A_a == 2:
        A_낸거1 = "보"

    if A_b == 0:
        A_낸거2 = "가위"
    if A_b == 1:
        A_낸거2 = "바위"
    if A_b == 2:
        A_낸거2 = "보"


    if B_a == 0:
        B_낸거1 = "가위"
    if B_a == 1:
        B_낸거1 = "바위"
    if B_a == 2:
        B_낸거1 = "보"

    if B_b == 0:
        B_낸거2 = "가위"
    if B_b == 1:
        B_낸거2 = "바위"
    if B_b == 2:
        B_낸거2 = "보"
    #가위바위보 판별 끝

    #하나 빼기 시작
    print("A는", A_낸거1,"와",A_낸거2,"를 냈다.")
    print("B는", B_낸거1,"와",B_낸거2,"를 냈다.")
    print("==========================")
    print("!하나 빼기!")
    print("==========================")
    A빼기 = random.randint(0,1)
    B빼기 = random.randint(0,1)

    if A빼기 == 0:
        print("A는", A_낸거1,"를 냈다.")
        A_final = A_a
    if A빼기 == 1:
        print("A는", A_낸거2,"를 냈다.")
        A_final = A_b
    if B빼기 == 0:
        print("B는", B_낸거1,"를 냈다.")
        B_final = B_a
    if B빼기 == 1:
        print("B는", B_낸거2,"를 냈다.")
        B_final = B_b
    print("==========================")
    #하나 빼기 끝

    #승부 판별 시작
    if A_final == 0 and B_final == 1:
        print("B가 이겼습니다.")
        run = 0
    if A_final == 1 and B_final == 0:
        print("A가 이겼습니다.")
        run = 0

    if A_final == 0 and B_final == 2:
        print("A가 이겼습니다.")
        run = 0
    if A_final == 2 and B_final == 0:
        print("B가 이겼습니다.")
        run = 0

    if A_final == 1 and B_final == 2:
        print("B가 이겼습니다.")
        run = 0
    if A_final == 2 and B_final == 1:
        print("A가 이겼습니다.")
        run = 0

    if A_final == B_final:
        print("비겼습니다.")
        print("F5를 눌러 게임을 다시 시작해주세요.")
        run = 0
    #승부 판별 끝