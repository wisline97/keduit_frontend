# 정렬 ( ORDER BY )
# 1) 내림차순 정렬 : DESC
# 2) 오름차순 정렬 : ASC(기본 값)

# 1) SELECT
# 2) FROM
# 3) WHERE
# 4) ORDER BY

# [문제] book테이블에서 도서명과 출판일 가져오기
# [조건] 출판일을 기준으로 정렬
SELECT book_publishing_date, book_title FROM book;
SELECT book_publishing_date, book_title FROM book ORDER BY book_publishing_date ASC;
SELECT book_publishing_date, book_title FROM book ORDER BY book_publishing_date DESC;

# [문제] book테이블에서 도서명에 '자바'가 들어가는 도서 가져오기
# [조건] 도서명을 기준으로 정렬
SELECT * FROM book WHERE book_title LIKE '%자바%' OR book_title LIKE '%java%';
SELECT * FROM book WHERE book_title LIKE '%자바%' OR book_title LIKE '%java%' ORDER BY book_title ASC;
SELECT * FROM book WHERE book_title LIKE '%자바%' OR book_title LIKE '%java%' ORDER BY book_title DESC;