'''
    [1] 변수의 값 교체
        (1) 변수는 한번에 하나의 값만 저장할 수 있다.
        (2) 때문에 두 변수간의 서로 값 교체를 위해서는
            추가적으로 변수 한개가 더 필요하다.
'''

x = 20
y = 30
z = 0
print("x =", x, "y =", y)

z = x
x = y
y = z

print("but now")
print("x =", x, "y =",  y)
