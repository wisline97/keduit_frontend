
# GROUP BY
-- 그룹 함수와 함께 사용한다.
-- GROYP BY 될 때에 내부적으로 임시 테이블을 만든다.
-- 이때 임시 테이블의 컬럼은 GROUP BY에 작성한 컬럼과
-- SELECT에서 사용한 그룹함수가 된다.

# [문제] member테이블에서 회원의 수를 성별로 가져오기
SELECT member_gender, COUNT(*) FROM member;	-- 잘못된 결과 출력
SELECT member_gender, COUNT(*) FROM member GROUP BY member_gender;

# [문제] book테이블에서 도서 종류별 도서 수량 가져오기
SELECT book_kind, COUNT(*) FROM book GROUP BY book_kind;

# [문제] cart테이블에서 회원별로 구입한 총 수량 가져오기
# [조건] 내림차순 정렬하기
SELECT buyer, SUM(buy_count) FROM cart GROUP BY buyer
ORDER BY SUM(buy_count) DESC;

#-----------------------------------------------------------------------

# HAVING
-- GROUP BY로 만든 테이블에서는 조건을 HAVING을 사용한다.

# [문제] cart테이블에서 회원이 구입한 도서의 수량이 2개 이상인 회원의 id 가져오기
DESC cart;
SELECT buyer, SUM(buy_count) FROM cart GROUP BY buyer;
SELECT buyer, SUM(buy_count) FROM cart GROUP BY buyer 
HAVING SUM(buy_count) >= 2;

# [문제] book테이블에서 2015년에서 2019년 사이에 출간한 도서 중에
#       재고 수량이 3개 이하인 도서를 종류별 개수 가져오기
SELECT COUNT(*) FROM book 
WHERE '2015-01-01' <= book_publishing_date AND book_publishing_date < '2020-01-01';

SELECT book_kind, COUNT(*) FROM book 
WHERE '2015-01-01' <= book_publishing_date AND book_publishing_date < '2020-01-01'
GROUP BY book_kind;

SELECT book_kind, COUNT(*) FROM book 
WHERE '2015-01-01' <= book_publishing_date AND book_publishing_date < '2020-01-01' AND book_count <= 3
GROUP BY book_kind;