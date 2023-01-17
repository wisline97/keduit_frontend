use _bookshop;

# [문제] book테이블에서 전체 평균 가격보다 더 높은 도서정보 가져오기'
select avg(book_price) from book;

select *
from book
where book_price > (select avg(book_price) from book);

# [문제] book테이블에서 가장 가격이 높은 도서 정보 가져오기
select *
from book
where book_price = (select max(book_price) from book);