'''
    [문제]
        랜덤으로 3~8의 숫자를 저장한다. 
        랜덤숫자 3 이면 세자리 자리수를 뜻한다. 
        랜덤숫자 4 이면 네자리 자리수를뜻한다.
        랜덤숫자 8 이면 여덟자리 자리수를 뜻한다. 
        
        세자리수라면 100~999 사이의 랜덤숫자를 다시 저장한다.
        네자리수라면 1000~9999 사이의 랜덤숫자를 다시 저장한다. 
        다자리수라면 10000~99999 사이의 랜덤숫자를 다시 저장한다.
        ...
        여덟자리수라면 10000000~99999999 사이의 랜덤숫자를 다시 저장한다. 
        위 규칙으로 뽑은 랜덤숫자의 한가운데 위치의 수를 출력한다.
        단, 숫자의 개수가 짝수라면 가운데 자리의 수는 두개가 될것이고,
        그중 앞의 자리수를 출력한다. 
    [예시] 
        r = 3  ==> 세자리수 534 ==> 
        가운데위치의 수인 3을 출력한다.  
        r = 4  ==> 두자리수 1945 ==> 
        가운데위치는 9, 4 두개인데 그중 앞의 자리수인 9 를 출력한다.
        r = 5  ==> 다섯자리수 13534 ==> 
        가운데 위치의 수인 5를 출력한다.
        r = 6  ==> 여섯자리수 564301 ==> 
        가운데위치는 4, 3 두개인데 그중 앞의 자리수인 4를 출력한다. 
'''
