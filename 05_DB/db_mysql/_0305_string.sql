/*
    [개념 1] UPPER, LOWER 함수 : 대소문자 바꿔주기
        . UPPER(문자열)    : 괄호 안 문자 데이터를 모두 대문자로 변환하여 반환
        . LOWER(문자열)    : 괄호 안 문자 데이터를 모두 소문자로 변환하여 반환
*/
-- [개념 1-1] UPPER, LOWER 함수 사용하기
-- [실습 1-1]

SELECT ENAME, UPPER(ENAME), LOWER(ENAME)
    FROM EMP;
    
-- [개념 1-2] UPPER 함수로 문자열 비교하기
-- [실습 1-2] 사원 이름이 SCOTT인 데이터 찾기

SELECT *
    FROM EMP
WHERE UPPER(ENAME) = UPPER('scott');

-- [개념 1-3] UPPER 함수로 문자열 비교하기
-- [실습 1-3] 사원 이름에 SCOTT 단어를 포함한 데이터 찾기

SELECT *
    FROM EMP
WHERE UPPER(ENAME) LIKE UPPER('%scott%');

/*
    [개념 2] LENGTH함수 : 문자열 길이
*/
-- [개념 2-1] 선택한 열의 문자열 길이 구하기
-- [실습 2-1] 사원이름과 사원이름의 길이 출력하기

SELECT ENAME, LENGTH(ENAME)
    FROM EMP;
    
-- [개념 2-2] WHERE절에서 LENGTH함수 사용하기
-- [실습 2-2] 사원 이름의 길이가 5이상인 사원정보 출력하기

SELECT ENAME, LENGTH(ENAME)
    FROM EMP
WHERE LENGTH(ENAME) >= 5;

/*
    [개념 3] SUBSTR 함수 : 문자열 일부 추출
        . SUBSTR(문자열 데이터, 시작 위치, 추출 길이)
            - 문자열 데이터의 시작 위치부터 추출 길이만큼 추출한다.
   
*/
-- [실습 3-1] SUBSTR 함수 사용하기

SELECT JOB, SUBSTR(JOB, 1, 2), SUBSTR(JOB, 3, 2), SUBSTR(JOB, 5)
    FROM EMP;



/*
    [개념 4] INSTR 함수 : 문자열 데이터 안에서 특정 문자 위치 찾기
      
*/

-- [개념 4-2] 특정 문자를 포함하고 있는 행 찾기
-- [실습 4-2] INSTR 함수로 사원 이름에 문자 S가 있는 행 구하기

SELECT *
    FROM EMP
WHERE INSTR(ENAME, 'S') > 0;

-- [실습 4-3] LIKE 연산자로 사원 이름에 문자 S가 있는 행 구하기

SELECT *
    FROM EMP
WHERE ENAME LIKE '%S%';


/*
    [개념 7] 두 문자열 데이터를 합치는 CONCAT 함수
        . 두 개의 문자열 데이터를 하나의 데이터로 연결해 주는 함수
*/
-- [실습 7-1] 두 열 사이에 콜롬(:) 넣고 연결하기

SELECT CONCAT(EMPNO, ENAME),
       CONCAT(EMPNO, CONCAT(' : ', ENAME))
FROM EMP
    WHERE ENAME = 'SCOTT';


 
    
/*
    [개념 8] TRIM,
        . TRIM([삭제 옵션(선택) [삭제할 문자(선택)] FROM [원본 문자열 데이터])
*/
-- [실습 8-1] TRIM 함수로 공백 제거하여 출력하기

SELECT TRIM('    [__Oracle__]     ') AS TRIM;



-- [문제 1] 사원 이름을 모두 소문자로 출력하기
-- [정답 1]

SELECT UPPER(ENAME)
    FROM EMP;
    
-- [문제 2] 직책 이름이 6글자 이상인 데이터만 출력하기
-- [정답 2]

SELECT JOB, LENGTH(JOB)
    FROM EMP
WHERE LENGTH(JOB) >= 6;

-- [문제 3] 모든 사원 이름을 세번째 글자부터 끝까지 출력하기
-- [정답 3]

SELECT ENAME, SUBSTR(ENAME, 3)
    FROM EMP;