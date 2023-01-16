CREATE DATABASE _sample;
USE _sample;

CREATE TABLE sample01(
	no INT(11),
	name VARCHAR(20),
    birthday DATE,
    address VARCHAR(40)
);

DESC sample01;

insert into sample01 values(1, '박준용', '1976-10-18', '대구광역시 수성구');
insert into sample01 (no, name, birthday, address) values(2, '김재진', '1987-02-14', '대구광역시 동구');
insert into sample01 (no, name, birthday, address) values(3, '홍길동', '1990-04-28', '서울시 송파구');

#테이블 검색
select * from sample01;

#테이블 부분 검색
select * from sample01 where no=2;

#내용을 수정할 땐 꼭 where을 넣어줘야함(안그러면 모든 유저의 이름이 이만수로 바뀜)
#수정은 매우 중요한 작업이기 때문에 기본적으로 수정이 막혀있을 수 있다. 설정에 가서 edit 어쩌구를 해제해야함
update sample01 set name='이만수' where no=2;

delete from sample01 where no=1;

