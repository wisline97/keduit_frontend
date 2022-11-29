/*
	[문제] 과락
		3과목의 평균이 60점 이상이면 합격입니다.
		단, 평균이 합격일지라도, 어느 한과목이 50점 미만이면 불합격입니다.
		아래 시험점수는 합격인가요?
        kor = 100;
		eng = 87;
		math = 49;		
*/

let kor = 100;
let eng = 87;
let math = 49;

let average = (kor + eng + math) / 3;

let standard = 50;

if (average >= 60 && kor > 50 && eng > 50 && math > 50) {
  console.log("합격");
} else {
  console.log("불합격");
}
