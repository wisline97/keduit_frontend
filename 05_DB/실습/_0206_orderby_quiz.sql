# 정렬 ( ORDER BY )
# 1) 내림차순 정렬 : DESC
# 2) 오름차순 정렬 : ASC(기본 값)

# [문제] book테이블에서 도서명과 출판일 가져오기
# [조건] 출판일을 기준으로 정렬
select book_title, book_reg_date from book order by book_reg_date asc;

# [문제] book테이블에서 도서명에 '자바'가 들어가는 도서 가져오기
# [조건] 도서명을 기준으로 정렬
select * from book where book_title like '%java%' or book_title like '%자바%'order by book_title asc;