# 그룹함수
# COUNT()
# SUM()
# AVG()
# MAX()
# MIN()

# [문제] member테이블에서 전체 회원 수 가져오기
SELECT COUNT(*) FROM member;

# [문제] member테이블에서 남자 회원 수 가져오기
SELECT COUNT(*) FROM member WHERE member_gender='m';

# [문제] book테이블에서 전체 도서 가격의 총합 가져오기
SELECT SUM(book_price) FROM book;

# [문제] book테이블에서 전체 도서 가격의 평균 가져오기
# [조건] 소수점 이하 2자리까지 출력
SELECT AVG(book_price) FROM book;
SELECT ROUND(AVG(book_price), 2) FROM book;

# [문제] book테이블에서 도서 가격을 10%로 인상했을 때의 총합 가져오기
SELECT SUM(book_price), SUM(book_price*1.1) FROM book;

# [문제] book테이블에서 도서 가격이 가장 높은 도서가격 가져오기
SELECT MAX(book_price) FROM book;