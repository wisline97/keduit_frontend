#1. 학생 테이블의 모든 열을 검색하라
select * from student;

#2. 학생 테이블의 이름, 학년, 주소 열만 선택적으로 검색하라
select STUDENT_NAME, STUDENT_GRADE, STUDENT_ADDR from student;

#3. 학생 테이블의 이름과 주소 열만 검색하라
select STUDENT_NAME, STUDENT_ADDR from student;

#5. 학생 번호가 1인 학생을 검색하라
select STUDENT_NO, STUDENT_NAME, STUDENT_GRADE from student where STUDENT_NO = 1;

#6. 키가 165 미만인 학생을 검색하라
select STUDENT_NO, STUDENT_NAME, STUDENT_GRADE, STUDENT_HEIGHT from student where STUDENT_HEIGHT < 165;

#7. 1학년이고 동시에 키가 170 이상인 학생의 이름, 학년, 키, 몸무게 을 검색하라
SELECT STUDENT_NO, STUDENT_NAME, STUDENT_GRADE, STUDENT_HEIGHT, STUDENT_WEIGHT
FROM student
WHERE STUDENT_GRADE = 1 AND STUDENT_HEIGHT >= 170;

#9. 몸무게 45보다 크거나 같고 50보다 작거나 같은 학생의 이름, 주소, 키, 몸무게을 검색 
SELECT STUDENT_NAME, STUDENT_ADDR, STUDENT_HEIGHT, STUDENT_WEIGHT
FROM student
WHERE STUDENT_WEIGHT >= 45 AND STUDENT_WEIGHT <= 50;

#11. 학생의 번호, 이름, 학년을 검색하라
SELECT STUDENT_NO, STUDENT_NAME, STUDENT_GRADE
FROM student;

#13. 박씨 성을 가진 학생을 검색하라
SELECT STUDENT_NO, STUDENT_NAME, STUDENT_GRADE
FROM student
WHERE STUDENT_NAME LIKE '박%';

#14. 김씨, 이씨, 박씨 성을 가진 학생 모두를 검색하되 반드시 LIKE 연산자를 사용하라
SELECT STUDENT_NO, STUDENT_NAME, STUDENT_GRADE
FROM student
WHERE STUDENT_NAME LIKE '박%' OR STUDENT_NAME LIKE '김%' OR STUDENT_NAME LIKE '이%';

#18. 학생 테이블에서 모든 열에 저장된 데이터를 검색하되, 이름 가나다순으로 정렬하여 출력하라
SELECT *
FROM student
order by STUDENT_NAME;

#19. 학생의 이름, 주소, 키 데이터를 검색하되 키가 큰 학생부터 출력하라
SELECT STUDENT_NAME, STUDENT_GRADE, STUDENT_ADDR, STUDENT_HEIGHT
FROM student
order by STUDENT_HEIGHT DESC;

#20. 1학년 학생의 이름, 학년, 주소, 몸무게 데이터를 검색하라(단 ,반드시 체중이 적은 학생부터 출력하라)
SELECT STUDENT_NAME, STUDENT_GRADE, STUDENT_ADDR, STUDENT_HEIGHT, STUDENT_WEIGHT
FROM student
WHERE STUDENT_GRADE = 1
order by STUDENT_WEIGHT ASC;

#21. 1학년 학생의 이름, 학년, 키, 몸무게 데이터를 검색하라(단, 키 내림차순으로 정렬하고, 같은 키는 몸무게 오름차순으로 정렬)
SELECT STUDENT_NAME, STUDENT_GRADE, STUDENT_ADDR, STUDENT_HEIGHT, STUDENT_WEIGHT
FROM student
WHERE STUDENT_GRADE = 1
order by STUDENT_WEIGHT ASC;

#22. 학생의 번호, 이름, 주소를 검색하되 이름을 가나다 순으로 정렬해라
SELECT STUDENT_NO, STUDENT_NAME, STUDENT_GRADE, STUDENT_ADDR
FROM student
order by STUDENT_NAME ASC;

#23. 학생 테이블에서 '보아' 학생과 학년이 동일한 모든 학생의 이름과 키, 몸무게를 검색하라
SELECT STUDENT_NAME, STUDENT_GRADE, STUDENT_HEIGHT, STUDENT_WEIGHT
FROM student
WHERE STUDENT_GRADE = (SELECT STUDENT_GRADE FROM student WHERE STUDENT_NAME LIKE "보아");

#24. 1번 학과 학생들의 평균 키보다 작은 학생의 이름, 학년, 키를 검색하라
#1번 학과는 소프트웨어 학과
#평균키 구하기 (174.6)
SELECT AVG(STUDENT_HEIGHT) FROM student WHERE STUDENT_MAJOR_NO = 1;

SELECT STUDENT_NAME, STUDENT_GRADE, STUDENT_HEIGHT, STUDENT_MAJOR_NO
FROM student
WHERE STUDENT_HEIGHT < (SELECT AVG(STUDENT_HEIGHT) FROM student WHERE STUDENT_MAJOR_NO = 1);

#25. '김태희' 학생과 학년이 같고, '김태희' 학생보다 큰 학생의 이름, 학년, 키를 검색
SELECT STUDENT_NAME, STUDENT_GRADE, STUDENT_HEIGHT
FROM student
WHERE STUDENT_NAME LIKE '김태희';

SELECT STUDENT_NAME, STUDENT_GRADE, STUDENT_HEIGHT
FROM student
WHERE STUDENT_HEIGHT > (SELECT STUDENT_HEIGHT FROM student WHERE STUDENT_NAME LIKE '김태희');

#26. 키가 165인 학생의 번호, 이름, 키를 검색하라
SELECT STUDENT_NO, STUDENT_NAME, STUDENT_HEIGHT
FROM student
WHERE STUDENT_HEIGHT = 165;

#27. 학생의 수를 검색하라
SELECT COUNT(*)
FROM student;

#29. 번호가 1인 과목의 평균 점수를 검색하라
SELECT MAJOR_NAME from major where MAJOR_NO = 1;

#30. 과목별 평균 점수를 검색하라
select * from course_history;
SELECT SUBJECT_NO,AVG(score)
from course_history
group by SUBJECT_NO;

#32. 누적학생 수가 네 명 이상인 과목의 평균 점수를 검색하라

SELECT SUBJECT_NO, AVG(score), COUNT(STUDENT_NO)
FROM course_history
GROUP BY SUBJECT_NO
HAVING COUNT(STUDENT_NO)>= 4;

SELECT SUBJECT_NO,COUNT(STUDENT_NO)
FROM course_history
GROUP BY SUBJECT_NO;

#34. 학생들의 학번, 이름, 소속학과 이름을 검색하라
select * FROM student;
select * FROM major;
select * FROM major_subject;
select * FROM professor;
select * FROM course_history;

select student.STUDENT_NO, student.STUDENT_NAME, major.MAJOR_NO, major.MAJOR_NAME
FROM student, major
WHERE student.STUDENT_MAJOR_NO = major.MAJOR_NO; 

#35. 교수의 번호, 이름, 소속 학과 이름을 검색하라
SELECT professor.PROFESSOR_NO, professor.PROFESSOR_NAME, major.MAJOR_NO, major.MAJOR_NAME
FROM professor, major
WHERE professor.PROFESSOR_MAJOR_NO = major.MAJOR_NO;

#36. '채영' 학생의 번호, 이름, 소속 학과 이름을 검색하라
SELECT student.STUDENT_NO, student.STUDENT_NAME, major.MAJOR_NAME
FROM student, major
WHERE student.STUDENT_MAJOR_NO = major.MAJOR_NO AND student.STUDENT_NAME LIKE '채영';

#37. 키가 180 이상인 학생의 번호, 이름, 키, 소속 학과 이름을 검색하라
SELECT student.STUDENT_NO, student.STUDENT_NAME, student.STUDENT_HEIGHT, major.MAJOR_NAME
FROM student, major
WHERE 180 <= student.STUDENT_HEIGHT AND student.STUDENT_MAJOR_NO = major.MAJOR_NO;

#38. 학점에A가 포함된학생들의 이름 출력
SELECT major_subject.SUBJECT_NAME, student.STUDENT_NO, student.STUDENT_NAME, course_history.CREDITS
FROM student, course_history, major_subject
WHERE course_history.CREDITS LIKE 'A%' AND course_history.STUDENT_NO = student.STUDENT_NO AND major_subject.SUBJECT_NO = course_history.SUBJECT_NO;