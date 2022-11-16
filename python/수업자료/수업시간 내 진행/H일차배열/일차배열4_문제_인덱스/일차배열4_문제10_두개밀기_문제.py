'''
   [문제]
      a 리스트에 있는 값들을 b에 저장하려고 한다. 
      a 리스트의 값을 뒤에서부터 두 개씩 저장하시오.
   [정답]
      b = [7,7,3,3,1,1]
'''

a = [1 ,3, 7]
b = [0, 0, 0, 0, 0, 0]


a_index = 0
b_index = len(b)-1
run = 1
count = 0
while run == 1:
   b[b_index] = a[a_index]
   b_index -= 1
   count += 1
   if count == 2:
      a_index += 1
      count = 0
   if b_index == 0:
      b[b_index] = a[a_index]
      run = 0

print(b)

