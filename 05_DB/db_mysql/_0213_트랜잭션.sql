
# DECIMAL(자리소, 소수점자리수)
--  예) DECIMAL(19, 4) = 총 19자리까지 표현되며, 소수점은 4자리까지 표현
CREATE TABLE account(
	id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    amount DECIMAL(19, 4) NOT NULL
);

CREATE TABLE transferHistory(
	id INT AUTO_INCREMENT PRIMARY KEY,
    from_id INT NOT NULL,
    to_id INT NOT NULL,
    amount DECIMAL(19, 4) NOT NULL,
    trans_date DATETIME
);

INSERT INTO account(name, amount) VALUES('김철수', 1000000), ('박영희', 90000);

# START TRANSACTION = 트랜잭션 기능 사용
-- (1) ROLLBACK = START TRANSACTION부터 ROLLBACK까지 전부 취소된다.
-- (2) COMMIT = START TRANSATION부터 COMMIT까지 전부 실행된다.
START TRANSACTION;
-- 철수의 잔액 - 500,000
UPDATE account SET amount = amount - 500000 WHERE id = 1;
-- 영희의 잔액 + 500,000
UPDATE account SET amount = amount + 500000 WHERE id = 2;
SELECT * FROM account;

INSERT INTO transferHistory (from_id, to_id, amount, trans_date)
VALUES(1, 2, 500000, now());
SELECT * FROM transferHistory;

ROLLBACK;
COMMIT;

SELECT * FROM account;
SELECT * FROM transferHistory;