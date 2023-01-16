# 서브쿼리

# [문제] book테이블에서 전체 평균 가격보다 더 높은 도서정보 가져오기
SELECT AVG(book_price) FROM book;
SELECT * FROM book
WHERE book_price > (SELECT AVG(book_price) FROM book);

# [문제] book테이블에서 가장 가격이 높은 도서 정보 가져오기
SELECT * FROM book
WHERE book_price = (SELECT MAX(book_price) FROM book);