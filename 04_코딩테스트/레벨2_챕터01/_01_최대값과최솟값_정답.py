# https://school.programmers.co.kr/learn/courses/30/lessons/12939

def solution(s):
    answer = ''
    temp = []
    token = s.split(" ")
    for i in range(len(token)):
        temp.append(int(token[i]))
    answer += str(min(temp))
    answer += " "
    answer += str(max(temp))

    return answer

s = "1 2 3 4"
r = solution(s)
print(r)