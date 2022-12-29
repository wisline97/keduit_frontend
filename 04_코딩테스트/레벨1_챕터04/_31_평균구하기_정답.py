def solution(arr):
    a = sum(arr)
    a = a / len(arr)
    return a


arr = [1,2,3,4]
a = solution(arr)
print(a)