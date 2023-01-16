# LIKE ( 검색 한 개 )
# [문제] book테이블에서 책 제목에 'java'가 포함되어 있는 책정보 가져오기
-- MySQL은 기본적으로 대소문자 구별을 하지 않는다.
SELECT * FROM book WHERE book_title LIKE '%java%';
SELECT * FROM book WHERE book_title LIKE '%자바%';

# LIKE ( 검색 여러개 )
# [문제] book테이블에서 책 제목에 'java' 또는 '자바' 가 포함되어 있는 책정보 가져오기
SELECT * FROM book WHERE book_title LIKE '%자바%' OR book_title LIKE '%java%';

# [문제] book테이블에서 책 제목이 '나'로 시작되는 책정보 가져오기
SELECT * FROM book WHERE book_title LIKE '나%';

# [문제] book테이블에서 책 제목이 '외국어'로 끝나는 책정보 가져오기
SELECT * FROM book WHERE book_title LIKE '%외국어';

# [문제] member테이블에서 이름이 4글자인 회원정보 가져오기
SELECT * FROM member WHERE member_name LIKE '____';