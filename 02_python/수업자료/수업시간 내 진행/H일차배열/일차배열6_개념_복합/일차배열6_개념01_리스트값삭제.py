'''
    [리스트 값 삭제 remove와 del]
        remove와 del을 사용해서 리스트에 값을 삭제할 수 있다.
'''

a = [10, 20, 30, 40]
print("a : " , a)

# remove(삭제할 값)를 통해 제거가 가능하다.
a.remove(30)
print("a : " , a)

# 아래와 같이 삭제할 수도 있다. (10 삭제)
a.remove(a[0])
print("a : " , a)

# del 삭제할값 을 통해 제거가 가능하다.
del a[0]
print("a :", a)

# 이외의 배열 메소드

# insert(index,obj)
# -> 배열의 index 자리에 obj 값 삽입 ex. a.insert(0,3) 이면 배열 a 0번째 자리에 3을 삽입하고 기존의 a[0]자리와 그 뒤에 있던 자료들은 모두 한 칸 씩 뒤로 밀림 
# max(list)
# -> 배열 내 가장 큰 숫자를 뽑아낸다.(스트링의 경우 알파벳 순서를 기준으로 한다)