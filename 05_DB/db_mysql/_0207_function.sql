# 숫자 함수
# ABS()			절대값
# CEIL()		소수점 올림
# FLOOR()		소수점 버림
# ROUND()		소수점 반올림(자리수 지정 가능)
# TRUNCATE()	소수점 버림(자리수 지정 가능)
# POW()			x의 y승
# MOD()			나머지
# GREATEST()	max
# LEAST()		min

SELECT ABS(100), ABS(-100);

SELECT ROUND(3.5), ROUND(3.1);
SELECT CEIL(3.5), CEIL(3.1);
SELECT FLOOR(3.5), FLOOR(3.1);

SELECT ROUND(3.14356, 0), ROUND(3.51234, 0);			# 소수점 이하 0자리
SELECT ROUND(3.14356, 1), ROUND(3.55234, 1);			# 소수점 이하 1자리
SELECT ROUND(13.14356, -1), ROUND(15.55234, -1);		# 1의 자리

SELECT TRUNCATE(3.14356, 0), TRUNCATE(3.51234, 0);		# 소수점 이하 0자리
SELECT TRUNCATE(3.14356, 1), TRUNCATE(3.55234, 1);		# 소수점 이하 1자리
SELECT TRUNCATE(13.14356, -1), TRUNCATE(15.55234, -1);	# 1의 자리

SELECT POW(10, 3);
SELECT MOD(10, 3);
SELECT GREATEST(10, 3, 4, 5, 3, 6);
SELECT LEAST(10, 3, 4, 5, -3, 6);

#----------------------------------------------------------------------------
# 문자열 함수
# [주의] 자바와 달리 인덱스가 1부터 시작함

# CONCAT(), INSERT(), REPLACE(), INSTR()
# CONCAT() : 문자열 이어붙이기
SELECT CONCAT('aaa', 'bbb', 'ccc');		# aaabbbccc
# INSERT() : 2번째부터 3개를 삭제한 후, 삽입
SELECT INSERT('abcde', 2, 3, 'bbb');	# abbbe
# INSERT() : 2번째부터 삽입
SELECT INSERT('aaaa', 2, 0, 'bbb');		# abbbaaa
# REPLACE() : 'bb'를 'ff'로 변경
SELECT REPLACE('aabbcc', 'bb', 'ff');	# aaffcc
# INSTR() : '하세'라는 문자열이 있으면 해당 문자열의 시작 위치(=인덱스)
SELECT INSTR('안녕하세요', '하세');			# 3
# INSTR() : 해당 문자열이 없으면 0
SELECT INSTR('안녕하세요', '방갑');			# 0

# LEFT, RIGHT, MID
# LEFT() : 왼쪽에서부터 3개를 제외한 나머지 삭제
SELECT LEFT('abcdef', 3);				# abc
# RIGHT() : 오른쪽에서부터 3개를 제외한 나머지 삭제
SELECT RIGHT('abcdef', 3);				# def
# MID() : 2번째에서부터 3개를 제외한 나머지 삭제
SELECT MID('abcdefg', 2, 3);			# bcd

# LTRIM, RTRIM, TRIM
SELECT CONCAT('[', '         abc        ', ']');		# 공백제거 없이 연결
SELECT CONCAT('[', LTRIM('         abc        '), ']');	# LTRIM() : 왼쪽 공백 제거 후 연결
SELECT CONCAT('[', RTRIM('         abc        '), ']');	# RTRIM() : 오른쪽 공백 제거 후 연결
SELECT CONCAT('[', TRIM('         abc        '), ']');	# TRIM()  : 좌우 공백 제거 후 연결

# LCASE, LOWER
SELECT LCASE('acDDefg');	# 소문자 변환
SELECT LOWER('acDDefg');	# 소문자 변환

# UCASE, UPPER
SELECT UCASE('acDDefg');	# 대문자 변환
SELECT UPPER('acDDefg');	# 대문자 변환

# REVERSE
SELECT REVERSE('acDDefg');	# 반전

#----------------------------------------------------------------------------
# 날짜 함수

# 날짜와 시간
SELECT NOW();
SELECT SYSDATE();
SELECT CURRENT_TIMESTAMP();

# 날짜
SELECT CURRENT_DATE();
SELECT CURDATE();

# 시간
SELECT CURRENT_TIME();
SELECT CURTIME();

SELECT NOW(), YEAR(NOW());
SELECT NOW(), MONTH(NOW());
SELECT NOW(), DAY(NOW());
SELECT(CONCAT(YEAR(NOW()), '년 ', MONTH(NOW()), '월 ', DAY(NOW()), '일'));

SELECT NOW(), MONTHNAME(NOW());
SELECT DAYNAME(NOW());

SELECT NOW(), DAYOFWEEK(NOW());		# 일요일 = 1
SELECT NOW(), DAYOFYEAR(NOW());		# 올해의 몇번째 날
SELECT NOW(), WEEK(NOW());			# 올해의 몇번째 주

# 포맷
SELECT NOW(), DATE_FORMAT(NOW(), '%Y년 %m월 %d일, %H시 %i분 %S초');

# [문제] member테이블에서 회원의 가입 일자를 한글 날짜 형식으로 가져오기
SELECT member_no, DATE_FORMAT(member_reg_date, '%Y년 %m월 %d일, %H시 %i분 %S초') 
FROM member
ORDER BY member_reg_date DESC;