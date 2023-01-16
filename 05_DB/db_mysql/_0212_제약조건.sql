
-- NOT NULL : 값을 넣지 않으면 오류발생
-- PRIMARY KEY : 고유번호라는 의미로 같은 값을 저장할 수 없다.
-- AUTO_INCREMENT : 값을 넣지 않아도 1씩 자동증가된다.

CREATE TABLE member1(
		num INT NOT NULL,
    name VARCHAR(20) NOT NULL,
    score INT
);
INSERT INTO member1 VALUES(null, null, 10);		-- 오류 발생
INSERT INTO member1 VALUES(1003, '이만수', 10);
SELECT * FROM member1;

CREATE TABLE member2(
		num INT,
    name VARCHAR(20) NOT NULL,
    PRIMARY KEY(num)		-- 중복 숫자를 넣을 수 없다.
);
INSERT INTO member2 VALUES(1, '김철수');
INSERT INTO member2 VALUES(2, '김철수');
INSERT INTO member2 VALUES(2, '김철수');	-- 오류 발생
SELECT * FROM member2;

CREATE TABLE member3(
		num INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);
INSERT member3(name) VALUES('이만수');
INSERT member3(name) VALUES('김철수');
INSERT member3(name) VALUES('박철민');
SELECT * FROM member3;