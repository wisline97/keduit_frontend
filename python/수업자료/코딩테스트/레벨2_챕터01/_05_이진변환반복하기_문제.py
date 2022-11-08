
# https://school.programmers.co.kr/learn/courses/30/lessons/70129
def change(c):
    st = ""
    a = 1
    while True:
        if c <= a:
            break
        a *= 2
    while True:
        val = c // a
        st += str(val)
        c = c % a
        a //= 2
        if a == 0:
            break
    st = int(st)
    st = str(st)
    return st

def solution(s):
    answer = []
    
    return answer

s = "110010101001"

r = solution(s)
print(r)