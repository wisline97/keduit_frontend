CREATE DATABASE _UNIVERSITY;
USE _UNIVERSITY;

# 학과
CREATE TABLE MAJOR ( 
    MAJOR_NO INT ,
    MAJOR_NAME VARCHAR(24) 
);

# 교수
CREATE TABLE PROFESSOR (
    PROFESSOR_NO INT ,
    PROFESSOR_NAME VARCHAR(9) ,
    PROFESSOR_MAJOR_NO INT 
);

# 학생
CREATE TABLE STUDENT(
    STUDENT_NO INT ,
    STUDENT_NAME VARCHAR(9) ,
    STUDENT_ADDR VARCHAR(15),
    STUDENT_GRADE INT,
    STUDENT_HEIGHT INT,
    STUDENT_WEIGHT INT,
    STUDENT_STATUS VARCHAR(6),
    STUDENT_INPUT_DATA DATE,
    STUDENT_MAJOR_NO INT 
);


# 전공과목
CREATE TABLE MAJOR_SUBJECT (
    SUBJECT_NO INT ,
    SUBJECT_NAME VARCHAR(33),
    SUBJECT_SCORE INT,
    SUBJECT_PROFESSOR_NO INT
);

# 수강내역 
CREATE TABLE COURSE_HISTORY(
    STUDENT_NO INT NOT NULL,
    SUBJECT_NO INT NOT NULL,
    SCORE INT,
    CREDITS VARCHAR(6)
);

INSERT INTO MAJOR VALUES(1, '소프트웨어공학과');
INSERT INTO MAJOR VALUES(2, '컴퓨터공학과');
INSERT INTO MAJOR VALUES(3, '경영정보학과');
INSERT INTO MAJOR VALUES(4, '경영학과');
INSERT INTO MAJOR VALUES(5, '연극영화학과');
INSERT INTO MAJOR VALUES(6, '철학과');
SELECT * FROM MAJOR;


INSERT INTO PROFESSOR VALUES(1, '이해진', 1);
INSERT INTO PROFESSOR VALUES(2, '김정주', 1);
INSERT INTO PROFESSOR VALUES(3, '김이숙', 1);
INSERT INTO PROFESSOR VALUES(4, '이석호', 2);
INSERT INTO PROFESSOR VALUES(5, '김사부', 3);
INSERT INTO PROFESSOR VALUES(6, '장미희', 5);
INSERT INTO PROFESSOR VALUES(7, '백남영', 5);
INSERT INTO PROFESSOR VALUES(8, '김현이', 5);
INSERT INTO PROFESSOR VALUES(9, '이사부', 5);

SELECT * FROM PROFESSOR;


INSERT INTO MAJOR_SUBJECT VALUES(1, '데이터베이스관리', 3, 3);
INSERT INTO MAJOR_SUBJECT VALUES(2, '데이터베이스프로그래밍', 3, 3);
INSERT INTO MAJOR_SUBJECT VALUES(3, 'SQL활용', 3, 4);
INSERT INTO MAJOR_SUBJECT VALUES(4, '데이터베이스', 4, 5);
INSERT INTO MAJOR_SUBJECT VALUES(5, '인터넷마케팅', 3, 5);
INSERT INTO MAJOR_SUBJECT VALUES(6, '연기실습', 2, 7);
INSERT INTO MAJOR_SUBJECT VALUES(7, '영화제작실습', 2, 8);
INSERT INTO MAJOR_SUBJECT VALUES(8, '영화마케팅', 1, 9);
SELECT * FROM MAJOR_SUBJECT;



INSERT INTO STUDENT VALUES(1, '김이향', '인천남동구', 4, 166, 56, '재학', '2005-03-01',5);

INSERT INTO STUDENT 
VALUES(6, '박지은', '서울양천구', 2, 183, 65, '재학', '2015-02-14',3);

INSERT INTO STUDENT 
VALUES(7, '안칠현', '서울금천구', 1, 178, 65, '재학', '2016-02-19',1);

INSERT INTO STUDENT 
VALUES(8, '김태희', '서울구로구', 1, 165, 45, '재학', '2016-02-19',3);

INSERT INTO STUDENT 
VALUES(9, '채영', '서울구로구', 1, 172, 47, '재학', '2016-02-19',2);

INSERT INTO STUDENT 
VALUES(11, '영란', '서울강남구', 1, 162, 43, '재학', '2016-02-19',5);

INSERT INTO STUDENT 
VALUES(12, '윤호', '서울강남구', 1, 184, 66, '휴학', '2016-08-10',1);

INSERT INTO STUDENT 
VALUES(13, '보아', '서울구로구', 1, 162, 45, '재학', '2016-02-19',1);

INSERT INTO STUDENT 
VALUES(14, '문근영', '서울강남구', 1, 165, 45, '재학', '2016-02-19',3);

SELECT * FROM STUDENT;


INSERT INTO  COURSE_HISTORY VALUES(7, 1, 84.5, 'B');
INSERT INTO  COURSE_HISTORY VALUES(12, 1, 50, 'F');
INSERT INTO  COURSE_HISTORY VALUES(13, 1, 90, 'A');
INSERT INTO  COURSE_HISTORY VALUES(7, 2, 80, 'B');
INSERT INTO  COURSE_HISTORY VALUES(13, 2, 94.5, 'A');
INSERT INTO  COURSE_HISTORY VALUES(9, 3, 90, 'A');
INSERT INTO  COURSE_HISTORY VALUES(10, 3, 70, 'C');
INSERT INTO  COURSE_HISTORY VALUES(4, 4, 90, 'A');
INSERT INTO  COURSE_HISTORY VALUES(6, 4, 55, 'F');
INSERT INTO  COURSE_HISTORY VALUES(8, 4, 85, 'B');
INSERT INTO  COURSE_HISTORY VALUES(14, 4, 95, 'A');
INSERT INTO  COURSE_HISTORY VALUES(4, 5, 70, 'C');
INSERT INTO  COURSE_HISTORY VALUES(6, 5, 95, 'A');
INSERT INTO  COURSE_HISTORY VALUES(8, 5, 90, 'A');
INSERT INTO  COURSE_HISTORY VALUES(14, 5, 95, 'A');
INSERT INTO  COURSE_HISTORY VALUES(6, 8, 90, 'A');
INSERT INTO  COURSE_HISTORY VALUES(8, 8, 80, 'B');
INSERT INTO  COURSE_HISTORY VALUES(14, 8, 90, 'A');
INSERT INTO  COURSE_HISTORY VALUES(1, 6, 85, 'B');
INSERT INTO  COURSE_HISTORY VALUES(5, 6, 80, 'B');
INSERT INTO  COURSE_HISTORY VALUES(11, 6, 78.5, 'C');
INSERT INTO  COURSE_HISTORY VALUES(1, 7, 95, 'A');
INSERT INTO  COURSE_HISTORY VALUES(5, 7, 85, 'B');
INSERT INTO  COURSE_HISTORY VALUES(1, 8, 100, 'A');

SELECT * FROM  COURSE_HISTORY;