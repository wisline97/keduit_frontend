# https://school.programmers.co.kr/learn/courses/30/lessons/12951

def solution(s):
    answer = ""
    while True:
        if len(s) <= 0:
            break
        if s[0] == " ":
            answer += " "
            s = s[1:]
            continue              
        temp = ""
        if " " in s:
            a = s.index(" ")
            temp = s[:a]
            s = s[a:]
            b = temp[0]
            c = temp[1:]
            b = b.upper()
            c = c.lower()         
            answer = answer + b + c
        else:        
            b = s[0]
            c = s[1:]
            b = b.upper()
            c = c.lower()         
            answer = answer + b + c
            s = ""
    return answer
s = "3people unFollowed me"	

r = solution(s)
print(r)
