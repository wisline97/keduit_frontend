# [문제] member테이블에서 회원의 수를 성별로 가져오기
select member_gender, count(member_gender) from member group by member_gender;

# [문제] book테이블에서 도서 종류별 도서 수량 가져오기
select * from book;
select book_kind, count(*) from book group by book_kind;

# [문제] cart테이블에서 회원별로 구입한 총 수량 가져오기
# [조건] 내림차순 정렬하기
select member.member_id, cart.buyer, member_name,sum(buy_count)
from cart, member
where cart.buyer = member.member_id
group by cart.buyer
order by count(buy_count) desc;

#-----------------------------------------------------------------------

# [문제] cart테이블에서 회원이 구입한 도서의 수량이 2개 이상인 회원의 id 가져오기
select buyer, sum(buy_count)
from cart
group by buyer
having sum(buy_count) >= 2;

select * from cart;

# [문제] book테이블에서 2015년에서 2019년 사이에 출간한 도서 중에 재고 수량이 3개 이하인 도서를 종류별 개수 가져오기
select book_kind, count(*)
from book
where book_reg_date >= '2015-01-01' and book_reg_date <= '2019-12-31' and book_count <= 3
group by book_kind;
