# https://school.programmers.co.kr/learn/courses/30/lessons/12911
def change(num):
    a = 1
    while True:
        if a >= num:
            break
        a *= 2
    st = ""
    while True:
        b = num // a
        st += str(b)
        num = num % a
        a //= 2
        if a == 0:
            break
    st = str(st)
    return st
def getOneCount(n):
    st = str(n)
    c = 0
    for i in range(len(st)):
        if st[i] == "1":
            c += 1
    return c

def solution(n):
    st1 = change(n)
    c1 = getOneCount(st1)

    while True:
        n += 1
        st2 = change(n)
        c2 = getOneCount(st2)
        if c1 == c2:
            return n
    
n = 15
r = solution(n)
print(r)

n = 78
r = solution(n)
print(r)