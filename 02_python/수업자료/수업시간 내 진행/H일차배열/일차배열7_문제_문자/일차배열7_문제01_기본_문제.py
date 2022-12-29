'''
    [문제]
        문자열 hello를 olleh로 출력하시오.
'''
text = "hello"

i =  len(text) - 1

while i >= 0:
    print(text[i], end="")
    i-=1