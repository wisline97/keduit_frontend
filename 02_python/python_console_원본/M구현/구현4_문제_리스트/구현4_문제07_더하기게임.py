"""
	[더하기게임]	
		1) 1~10 사이의 숫자를 랜덤으로 7개보여준다. (중복금지)
		2) 그안에서 3개의 인덱스를 고를수있게해준다. (중복금지)
		3) 숫자를 하나 제시하는데 인덱스3개의 값의 합이
		   제시된 숫자랑 같으면 정답. 
		   단, 정답은 여러개 일수있다. 
		4) 반드시 정답의 경우의 수는 있어야한다.	 
		   단! 중복으로 값을 고를순없다. 
		[예시]

		    보기  
      		a = [1,5,8,6,4,2,9]
		    r = 13	
		[정답] 
  			인덱스를 세개를 고른다. [0,2,4] 각각의 값은 이와 같다. [1 + 8 + 4] 합이 13이므로 정답	
		[주의]
		    인덱스를 이와같이 똑같은 자리는 고를수없다. [5,5,6] 
"""

a = []
r = 0