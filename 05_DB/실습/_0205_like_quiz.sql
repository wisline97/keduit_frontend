#select * from book
#book table의 모든 것을 선택(검색)

#select * from book where book_title
#book table에서 book_title 인 것을 모두 선택(검색)

#select * from book where book_title like '%java%';
#book table에서 book title이 java가 포함되어 있는 셀을 검색(선택)

# %어쩌구% 는 %기호 사이에 단어를 넣으면 이 단어가 포함된 무언가를 찾는 다는 뜻
# 어쩌구% 혹은 %어쩌구는 해당 단어로 시작하는 단어 혹은 해당 단어로 끝나는 무언가를 찾는 다는 뜻 

# [문제] book테이블에서 책 제목에 'java'가 포함되어 있는 책정보 가져오기
select * from book where book_title like '%java%';

# [문제] book테이블에서 책 제목에 'java' 또는 '자바' 가 포함되어 있는 책정보 가져오기
select * from book where book_title like '%자바%';
select * from book where book_title like '%자바%' or book_title like '%java%';

# [문제] book테이블에서 책 제목이 '나'로 시작되는 책정보 가져오기
select * from book where book_title like '나%';

# [문제] book테이블에서 책 제목이 '외국어'로 끝나는 책정보 가져오기
select * from book where book_title like '%외국어';

# [문제] member테이블에서 이름이 4글자인 회원정보 가져오기
select * from member where member_name like '____';
