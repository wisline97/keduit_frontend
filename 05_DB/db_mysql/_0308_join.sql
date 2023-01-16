/*
    [개념 1] 등가 조인(join)
    (1) 정의
        두 개 이상의 테이블을 연결하여 하나의 테이블처럼 출력할 때 사용
    (2) FROM 절에는 여러 개 테이블을 지정하는 것이 가능하다.
*/
-- [개념 1-1] FROM절에 명시한 각 테이블을 구성하는 행이
-- 모든 경우의 수로 조합되어 출력된다. (14 X 4 = 56개의 행)

SELECT *
    FROM EMP, DEPT
ORDER BY EMPNO;

-- [개념 1-2] 테이블 이름을 별칭으로 표현하기
-- [별칭 사용 전]

SELECT *
    FROM EMP, DEPT
WHERE EMP.DEPTNO = DEPT.DEPTNO
ORDER BY EMPNO;

-- [별칭 사용 후]

SELECT *
    FROM EMP E, DEPT D
WHERE E.DEPTNO = D.DEPTNO
ORDER BY EMPNO;

-- [개념 1-3] 테이블의 모든 열을 출력할지라도 대부분 *을 사용하지 않고
-- 열을 하나한 직접 명시해준다.

SELECT E.EMPNO, E.ENAME, E.JOB, E.MGR, E.HIREDATE, E.SAL, E.COMM, E.DEPTNO, D.DNAME, D.LOC
    FROM EMP E, DEPT D
WHERE E.DEPTNO = D.DEPTNO
ORDER BY DEPTNO;

----------------------------------------------------------------------------------------------

/*
    [개념 2] 조인의 종류
    (1) 정의
        두 개 이상의 테이블을 하나의 테이블처럼 가로로 늘어뜨려 출력하기 위해 사용하는 조인은
        대상 데이터를 어떻게 연결하느냐에 따라 여러 종류로 나뉜다.
    (2) 종류
        1. 등가 조인(equi join) = 내부 조인(inner join) = 단순 조인(simple join) 전부 같은말이다.
            특정 열 값이 일치한 출력 결과를 사용하는 방식
        2. 비등가 조인 : 조인의 조건이 해당 테이블이 아닌 다른테이블로 조건이 성립될대 사용하는방식
        3. 자체 조인 : 하나의 테이블을 여러개의 테이블처럼 활용하는 조인 
*/
-- [개념 2-1] 등가 조인
-- [실습 2-1] 사원번호, 사원이름, 부서번호, 부서이름, 지역 함께 출력하기

SELECT E.EMPNO, E.ENAME, D.DEPTNO, D.DNAME, D.LOC
    FROM EMP E, DEPT D
WHERE E.DEPTNO = D.DEPTNO
ORDER BY D.DEPTNO, E.EMPNO;

-- [개념 2-2] 등가 조인
-- [실습 2-2] 사원번호, 이름, 급여, 부서이름, 지역 함께 출력하되
-- 급여가 3000 이상인 데이터만 출력하기

DESC EMP;
DESC DEPT;
SELECT E.EMPNO, E.ENAME, E.SAL, D.DNAME, D.LOC
    FROM EMP E, DEPT D
WHERE E.DEPTNO = D.DEPTNO
  AND E.SAL >= 3000;
  
-- [개념 2-3] 비등가 조인 (NON-EQUI JOIN) 
-- [실습 2-3] 조인의 조건이 해당 테이블이 아닌 다른테이블로 조인범위가 설정될때 , 지금 EMP 와 SALGRADE 가아님 SAL 테이블을 활용하였다. 

SELECT E.EMPNO, E.ENAME, E.JOB, E.MGR, E.HIREDATE, E.SAL, E.COMM, E.DEPTNO, S.GRADE, S.LOSAL, S.HISAL
    FROM EMP E, SALGRADE S
WHERE E.SAL BETWEEN S.LOSAL AND S.HISAL;

-- [개념 2-4] 자체 조인 (INNER JOIN)
-- [실습 2-4] 하나의 테이블을 여러개의 테이블처럼 활용하는 조인 
-- [ 회원번호 , 회원이름 , 직속상관이름 (번호가 아니라 이름이라 조인이 필요)
-- 메니저 번호가 또 하나의 사원의 번호이므로 결국 자기 테이블을 2번검사해야한다. 


SELECT E1.EMPNO, E1.ENAME , E1.MGR, 
    E2.EMPNO AS MGR_EMPNO, 
    E2.ENAME AS MGR_ENAME
FROM EMP E1, EMP E2
WHERE E1.MGR=E2.EMPNO;



