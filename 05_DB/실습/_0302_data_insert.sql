INSERT INTO DEPT (DEPTNO, DNAME, LOC)
VALUES(10, 'ACCOUNTING', 'NEW YORK');

INSERT INTO dept 
VALUES(20, 'RESEARCH', 'DALLAS');

INSERT INTO dept 
VALUES(30, 'SALES', 'CHICAGO');

INSERT INTO dept 
VALUES(40, 'OPERATIONS', 'BOSTON');

#==================================================================================

INSERT INTO emp 
VALUES( 7839, 'KING', 'PRESIDENT', null, '1981-11-17',  5000, null, 10 );

INSERT INTO emp 
VALUES( 7698, 'BLAKE', 'MANAGER', 7839, '1981-5-1', 2850, null, 30 );

INSERT INTO emp 
VALUES( 7782, 'CLARK', 'MANAGER', 7839, '1981-9-6',  2450, null, 10 );

INSERT INTO emp 
VALUES( 7566, 'JONES', 'MANAGER', 7839, '1981-4-2', 2975, null, 20 );

INSERT INTO emp 
VALUES( 7788, 'SCOTT', 'ANALYST', 7566,'1987-7-13',  3000, null, 20 );

INSERT INTO emp 
VALUES( 7902, 'FORD', 'ANALYST', 7566, '1982-12-3', 3000, null, 20 );

INSERT INTO emp 
VALUES(  7369, 'SMITH', 'CLERK', 7902,  '1980-12-7',  800, null, 20 );

INSERT INTO emp 
VALUES( 7499, 'ALLEN', 'SALESMAN', 7698, '1983-7-2', 1600, 300, 30 );

INSERT INTO emp 
VALUES(  7521, 'WARD', 'SALESMAN', 7698,'1982-2-22', 1250, 500, 30 );

INSERT INTO emp 
VALUES( 7654, 'MARTIN', 'SALESMAN', 7698, '1984-9-20', 1250, 1400, 30 );

INSERT INTO emp 
VALUES( 7844, 'TURNER', 'SALESMAN', 7698, '1981-4-5', 1500, 0, 30 );

INSERT INTO emp 
VALUES( 7876, 'ADAMS', 'CLERK', 7788, '1986-7-4', 1100, null, 20 );

INSERT INTO emp 
VALUES( 7900, 'JAMES', 'CLERK', 7698,'1983-6-12', 950, null, 30 );

INSERT INTO emp 
VALUES( 7934, 'MILLER', 'CLERK', 7782,'1982-8-12', 1300, null, 10 );

#==================================================================================

INSERT INTO salgrade VALUES (1, 700, 1200);
INSERT INTO salgrade VALUES (2, 1201, 1400);
INSERT INTO salgrade VALUES (3, 1401, 2000);
INSERT INTO salgrade VALUES (4, 2001, 3000);
INSERT INTO salgrade VALUES (5, 3001, 9999);

#==================================================================================

SELECT * FROM emp;
SELECT * FROM dept;
SELECT * FROM salgrade
