# https://school.programmers.co.kr/learn/courses/30/lessons/42842
import math

def getBrown(a , b):
    c = a * 2 + b * 2 + 4
    return c
def solution(brown, yellow):
    answer = []
    i = 1
    half = math.sqrt(yellow)
    while i <= half:
        if yellow % i == 0:
            a = i
            b = yellow // i
            c = getBrown(a , b)
            if c == brown:
                answer = [a + 2, b + 2] 
                break
        i += 1
    answer.sort()
    answer.reverse()
    return answer


brown = 10
yellow = 2
r = solution(brown , yellow)
print(r)