-- 명령어 한 줄 실행하기 : Ctrl + Enter

# 데이터 베이스 생성하기
CREATE DATABASE _bookshop; -- 생성후에는 반드시 reconnect를 해야한다(새로고침) 

# 데이터 베이스 사용하기
USE _bookshop;

#----------------------------------------------------------

# 회원정보 테이블 생성하기
CREATE TABLE member (
	  member_no INT,
    member_id VARCHAR(20),
    member_pw VARCHAR(20),
    member_name VARCHAR(20),
    member_gender VARCHAR(1),
    member_point INT,
    member_reg_date DATETIME
);

# 회원정보 테이블 삭제하기
DROP TABLE member;

# 회원 정보 테이블 전체 구조 확인하기
DESC member;

#----------------------------------------------------------

# 책 정보 테이블 생성하기
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

# 책 정보 테이블 삭제하기
DROP TABLE book;

# 책 정보 테이블 전체 구조 확인하기
DESC book;

#----------------------------------------------------------

# 장바구니 테이블 생성하기
CREATE TABLE cart(
	  cart_no INT,
    buyer VARCHAR(50),
    buy_price INT,
    buy_count INT,
    book_no INT,
    book_title VARCHAR(100),
    book_image VARCHAR(16)
);

# 장바구니 테이블 삭제하기
DROP TABLE cart;

# 장바구니 테이블 전체 구조 확인하기
DESC cart;

# 전체 테이블 목록을 확인한다. 
SHOW TABLES;
