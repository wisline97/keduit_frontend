CREATE DATABASE _employee;
USE _employee;

CREATE TABLE dept( 
  deptno     int, 
  dname      VARCHAR(14), 
  loc        VARCHAR(13)
);

CREATE TABLE emp( 
  empno   INT, 
  ename    VARCHAR(10), 
  job      VARCHAR(9), 
  mgr      int, 
  hiredate date, 
  sal      int, 
  comm     int, 
  deptno   int
  
);

CREATE TABLE bonus(
  ename VARCHAR(10),
  job   VARCHAR(9),
  sal   int,
  comm  int
);
 
CREATE TABLE salgrade(
  grade int,
  losal int,
  hisal int
);

DESC EMP;
DESC DEPT;
DESC SALGRADE;