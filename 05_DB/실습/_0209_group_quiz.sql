# [문제] member테이블에서 전체 회원 수 가져오기
select count(*) from member;

# [문제] member테이블에서 남자 회원 수 가져오기
select count(*) from member where member_gender = 'm';

# [문제] book테이블에서 전체 도서 가격의 총합 가져오기
select sum(book_price) from book;

# [문제] book테이블에서 전체 도서 가격의 평균 가져오기
select avg(book_price) from book;

# [조건] 소수점 이하 2자리까지 출력
select round(avg(book_price), 2) from book;

# [문제] book테이블에서 도서 가격을 10%로 인상했을 때의 총합 가져오기
select sum(book_price), sum(book_price*1.1) from book;

# [문제] book테이블에서 도서 가격이 가장 높은 도서가격 가져오기
select max(book_price) from book;

