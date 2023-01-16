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


# [문제] member테이블에서 회원의 가입 일자를 한글 날짜 형식으로 가져오기
select member_no, member_name, date_format(member_reg_date, '%Y년 %m월 %d일, %H시 %i분 %s초') from member order by member_reg_date DESC;