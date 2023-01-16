
# [문제] cart 테이블에서 buyer의 이름과 cart의 가격 가져오기
SELECT cart.buyer, member.member_name, cart.buy_price
FROM cart, member
where cart.buyer = member.member_id;

# [문제] cart 테이블에서 회원이 구매한 도서의 할인되기 전의 가격과 할인율 가져오기
SELECT cart.book_title, book.book_price, book.book_discount_rate, cart.buy_price
FROM cart, book
WHERE cart.book_no = book.book_no;

# [문제] cart 테이블에서 회원이 구매한 도서의 할인되기 전의 가격이 2만원 이상인 도서정보와 할인율 가져오기
SELECT cart.book_title, book.book_price, book.book_discount_rate, cart.buy_price
FROM cart, book
WHERE cart.book_no = book.book_no AND book.book_price >= 20000;

# --------------------------------------------------------------------------------------------
# [문제] cart 테이블에서 buyer의 이름과 cart의 가격 가져오기
SELECT c.buyer, m.member_name, c.buy_price
FROM cart c, member m
where c.buyer = m.member_id;

# [문제] cart 테이블에서 회원이 구매한 도서의 할인되기 전의 가격과 할인율 가져오기
SELECT c.book_title, b.book_price, b.book_discount_rate, c.buy_price
FROM cart c , book b
WHERE c.book_no =b.book_no;

# [문제] cart 테이블에서 회원이 구매한 도서의 할인되기 전의 가격이 2만원 이상인 도서정보와 할인율 가져오기
SELECT c.book_title, b.book_price, b.book_discount_rate, c.buy_price
FROM cart c, book b
WHERE c.book_no = b.book_no AND b.book_price >= 20000;