<script>
/*
	[문제]
		민수네 반 학생은 26명입니다
		민수네반 학생들에게 도화지를 두장씩 나누어 주려고합니다.
		도화지는 열장씪 묶음으로만 판매하고 열장에 1200원입니다.
		총얼마가 필요한가요?
 */

    var 학생 = 26;
    var 필요한도화지 = 학생 * 2;
    var 도화지 = 10;
    var 가격 = 1200;

    var 묶음 = parseInt(필요한도화지/도화지);		
    if(필요한도화지 % 도화지 > 0) {
        묶음 = 묶음 + 1;
    }
    console.log("묶음 : " + 묶음);
	console.log("총금액 : " + 묶음 * 가격);
</script>