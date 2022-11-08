# https://school.programmers.co.kr/learn/courses/30/lessons/12945
def solution(n):
    a = 1
    b = 1
    c = 1
    for i in range(2, n):
        c = a + b
        a = b
        b = c

    answer = c % 1234567
    return answer


n = 6
r = solution(n)
print(r)