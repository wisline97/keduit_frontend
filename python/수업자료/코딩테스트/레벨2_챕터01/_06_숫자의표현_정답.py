# https://school.programmers.co.kr/learn/courses/30/lessons/12924
def solution(n):
    max = 1
    c = 0
    while True:
        t = 0
        for i in range(max , n + 1):
            t += i
            if t > n:
                max += 1
                break
            if t == n:
                c += 1
                max += 1
                break
        if max > n:
            break
    return c

n = 15
r = solution(n)
print(r)