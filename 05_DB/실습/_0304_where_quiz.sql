/*    
    [개념 1] WHERE절
    (1) 정의
        많은 데이터 중에서 어떤 조건에 일치하는 행만을 골라내어 조회하는데 사용   
    (2) 기본 형식
        SELECT [조회할 열1 이름], [열2 이름], ..., [열N 이름]
        FROM [조회할 테이블 이름]
        WHERE [조회할 행을 선별하기 위한 조건식];
*/
-- [실습 1-1] EMP 테이블의 모든 열 출력하기
	select *
		from emp;
        
-- [실습 1-2] 부서 번호가 30인 데이터만 출력하기
	select *
		from emp
        where deptno = 30;

----------------------------------------------------------------------------------------

/*
    [개념 2] 연산자1
    (1) 논리 연산자 : AND, OR
    (2) 산술 연산자 : +, -, *, /
    (3) 비교 연산자 : >, >=, <, <=, 같다(=), 다르다(!=, <>, ^=)
    (4) 논리 부정 연산자 : NOT
    (5) IN 연산자  
        1) 정의
            특정 열에 해당하는 조건을 여러 개 지정할 때 사용
        2) 기본 형식
            SELECT  [조회할 열1 이름], [열2 이름], ..., [열N 이름]
            FROM    [조회할 테이블 이름]
            WHERE   열 이름 IN (데이터1, 데이터2, ..., 데이터N);
    (6) BETWEEN 최소값 AND 최대값 연산자
*/
-- [실습 2-1] 부서번호가 30이고, 직책이 SALESMAN인 회원정보 출력하기
	select *
		from emp
        where deptno = 30 and job = "SALESMAN";
    
-- [실습 2-2] 부서번호가 30이거나 직책이 CLERK인 회원정보 출력하기
	select *
		from emp
        where deptno = 30 and job = "CLERK";
    
-- [실습 2-3] 연봉이 36000인 회원정보 출력하기
	select *, sal*12 as ANNSAL
		from emp
        where sal*12 = 36000;

-- [실습 2-4] 급여가 3000이상인 회원정보 출력하기
	select *
		from emp
        where sal >= 3000;

-- [개념 2-5] (문자)대소 비교 연산자(비교 문자열이 문자 하나일 때)
-- [실습 2-4] 사원 이름의 첫 문자가 F와 같거나 F보다 뒤에 있는 회원정보 출력하기
	select *
		from emp
        where ename like 'F%' or ename > 'F';

-- [개념 2-6] (문자)대소 비교 연산자(비교 문자열이 문자 여러 개일 때)
-- [실습 2-6] 사원 이름에 FORZ를 포함한 문자열보다 알파벳 순서로 앞에 있는 회원정보 출력하기
	select *
		from emp
        where ename < 'FORZ';

-- [실습 2-7] 급여가 3000이 아닌 회원정보 출력하기
	select *
		from emp
        where sal != 3000;

-- [실습 2-9] 직책이 MANAGER 이거나 SALESMAN 이거나 CLERK인 사원정보 출력하기
-- [방법 2-9-1]
	select *
		from emp
        where job in ("MANAGER", "SALESMAN", "CLERK");

-- [방법 2-9-2]
	select *
		from emp
        where job = "MANAGER" or job = "SALESMAN" or job = "CLERK";

-- [실습 2-10] 직책이 MANAGER도 아니고 SALESMAN도 아니고 CLERK도 아닌 사원정도 출력하기
-- [방법 2-10-1]
	select *
		from emp
        where job not in ("MANAGER", "SALESMAN", "CLERK");

-- [방법 2-10-1]
	select *
		from emp
        where job != "MANAGER" and job != "SALESMAN" and job != "CLERK";

-- [실습 2-11] 사원의 급여가 2000 이상이고 3000이하인 사원정보 출력하기
-- [방법 2-11-1]
	select *
		from emp
        where SAL >= 2000 AND SAL <= 3000;

-- [방법 2-11-2]
	select *
		from emp
        where SAL BETWEEN 2000 AND 3000;

-- [실습 2-12] 사원의 급여가 2000 미만이거나 3000 초과하는 사원정보 출력하기
-- [방법 2-12-1]
	select *
		from emp
        where SAL < 2000 OR SAL > 3000;
        
-- [방법 2-12-2]
	select *
		from emp
        where SAL NOT BETWEEN 2000 AND 3000;

----------------------------------------------------------------------------------------

/*
    [개념 3] LIKE 연산자와 와일드 카드(wild card)  
    (1) 정의
        와일드 카드는 특정 문자 또는 문자열을 대체하거나 문자열 데이터의 패턴을 표기하는 특수문자
    (2) 종류
        1) %    ▶ 길이와 상관없이(문자 없는 경우도 포함) 모든 문자 데이터를 의미
        2) _    ▶ 어떤 값이든 상관없이 한 개의 문자 데이터를 의미
*/

-- [실습 3-1] 사원의 이름이 대문자 S로 시작하는 데이터 조회
select *
	from emp
    where ename like "S%";

-- [실습 3-2] 사원 이름의 두 번째 글자가 L인 사원만 출력
select *
	from emp
    where ename like "_L%";


-- [실습 3-3] 사원 이름에 AM이 포함되어 있는 사원만 출력
select *
	from emp
    where ename like "%AM%";

-- [실습 3-4] 사원 이름에 AM이 포함되어 있지 않은 사원만 출력
select *
	from emp
    where ename not like "%AM%";

----------------------------------------------------------------------------------------

/*
    [개념 4] IS NULL 연산자
    (1) 정의
        특정 열 또는 연산의 결과 값이 NULL인지 여부를 확인하기 위한 연산자
    (2) NULL은 산술 또는 비교 연산자와 비교해도 결과 값이 NULL이다.
        NULL + 100 = NULL
        NULL > 100 = NULL
*/

-- [실습 4-1] 추가수당이 NULL인 사원 출력하기
-- 잘못된 예)
SELECT *
    FROM EMP
WHERE COMM = NULL;


-- 올바른 예)
SELECT *
    FROM EMP
WHERE COMM IS NULL;


-- [실습 4-2] 직속 상관이 있는 사원 데이터만 출력하기
-- 직속 상관이 있는 사원은 상급자 사원번호(MGR)가 담겨 있다.
SELECT *
    FROM EMP
WHERE mgr IS NOT NULL;

----------------------------------------------------------------------------------------

/*
    [개념 6] 연산자 우선순위(priority)
    
    1   산술 연산자(곱하기, 나누기)
    2   산술 연산자(더하기, 빼기)
    3   대소 비교 연산자
    4   비교 연산자
    6   BETWEEN 연산자
    7   논리 부정 연산자 NOT
    8   논리 연산자 AND
    9   논리 연산자 OR
*/

----------------------------------------------------------------------------------------

-- [문제 5-1] 사원 번호가 7782인 사원정보만 출력하기
-- [정답 5-1]
select *
	from emp
	where empno = 7782;


-- [문제 5-2] 사원 번호가 7499이고 부서 번호가 30인 사원정보만 출력하기
-- [정답 5-2]
select *
	from emp
	where empno = 7499 and deptno = 30;

    
-- [문제 5-3] 부서 번호가 20이거나 직업이 SALESMAN인 사원정보만 출력하기
-- [정답 5-3]
select *
	from emp
	where job = "SALESMAN" or deptno = 20;

    
-- [문제 5-4] 급여가 2500 이상이고 직업이 ANALYST인 사원정보만 출력하기
-- [정답 5-4]
select *
	from emp
	where job = "ANALYST" and sal >= 2500;

    
-- [문제 5-5] 부서 번호가 10, 20번인 사원정보만 출력하기
-- [정답 5-5-1]
select *
	from emp
	where deptno = 10 or deptno = 20;

   
-- [정답 5-5-2]
select *
	from emp
	where deptno in (10, 20);


-- [문제 5-6] 사원 이름이 s로 끝나는 사원 데이터를 모두 출력하기
-- [정답 5-6] 
select *
	from emp
    where ename like "%S";


-- [문제 5-7] 부서번호가 30번인 사원 중에 직책이 SALESMAN인 사원의
-- 사원번호, 이름, 직책, 급여, 부서번호를 출력하기
-- [정답 5-7]
select empno, ename, job, sal, deptno
	from emp
    where deptno = 30 and job = "SALESMAN";

  
-- [문제 5-8] 20번, 30번 부서에 근무하고 있는 사원 중 급여가 2000 초과인 사원을 출력하기
-- [정답 5-8-2]
select *
	from emp
    where deptno in (20,30) and sal > 2000;

    
-- [문제 5-9] 급여가 2000이상 3000이하 범위 이외의 값을 가진 사원정보만 출력하기
-- [정답 5-9-1] 
select *
	from emp
    where sal not between 2000 and 3000;

-- [정답 5-9-2] 
select *
	from emp
    where sal < 2000 or sal > 3000;


-- [문제 5-10] 사원 이름에 E가 포함되어 있는 30번 부서의 사원 중
-- 급여가 1000 ~ 2000 사이가 아닌 사원이름, 사원번호, 급여, 부서번호를 출력하기
-- [정답 5-10]
select ename, empno, sal, deptno
	from emp
    where ename like "%E%"
		and deptno = 30
		and sal not between 1000 and 2000;
  
-- [문제 5-11] 추가 수당이 존재하지 않고 상급자가 있고 직책이 MANAGER, CLERK인 사원 중에서
-- 사원 이름의 두 번째 글자가 L이 아닌 사원의 정보를 출력하기
-- [정답 5-11]
select *
	from emp
    where comm IS NULL
		and mgr is not null
		and job in ("MANAGER", "CLERK")
		and ename not like "_L%";
