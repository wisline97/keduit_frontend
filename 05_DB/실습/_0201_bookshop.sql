create database _bookshop;
use _bookshop;

#유저 정보 테이블
create table member(
	member_no int,
    member_id varchar(20),
	member_pw varchar(20),
    member_name varchar(20),
    member_gender varchar(1),
    member_point int,
    member_reg_date datetime
);

#상품 정보 테이블
CREATE TABLE book(
	  book_no INT,
    book_kind VARCHAR(3),
    book_title VARCHAR(100),
    book_price INT,
    book_count INT,
    book_author VARCHAR(40),
    book_publishing_com VARCHAR(30),
    book_publishing_date VARCHAR(15),
    book_image VARCHAR(16),			
    book_content VARCHAR(500),
    book_discount_rate INT,				
    book_reg_date DATETIME
);

#장바구니 정보 테이블
CREATE TABLE cart(
	  cart_no INT,
    buyer VARCHAR(50),
    buy_price INT,
    buy_count INT,
    book_no INT,
    book_title VARCHAR(100),
    book_image VARCHAR(16)
);

SHOW TABLES;