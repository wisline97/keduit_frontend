# 문제) cart테이블에서 buyer의 이름과 cart의 가격 가져오기
select cart.buyer, member.member_name, cart.buy_price
from cart, member
where member.member_id = cart.buyer;

select * from cart;

# 문제) cart테이블에서 회원이 구매한 도서의 할인되기 전의 가격과 할인율 가져오기
select cart.buyer, member.member_id, member.member_name, book.book_title, book.book_price + book.book_price*(book.book_discount_rate/100), book.book_discount_rate
from book, cart, member
where cart.buyer = member.member_id and book.book_title = cart.book_title;

# 문제) cart테이블에서 회원이 구매한 도서의 할인되기 전의 가격이 2만원 이상인 도서정보와 할인율 가져오기
select cart.buyer, member.member_id, member.member_name, book.book_title, book.book_price, book.book_price + book.book_price*(book.book_discount_rate/100),book.book_discount_rate
from book, member, cart
where cart.buyer = member.member_id and cart.book_title = book.book_title and (book.book_price + book.book_price*(book.book_discount_rate/100)) >= 20000;