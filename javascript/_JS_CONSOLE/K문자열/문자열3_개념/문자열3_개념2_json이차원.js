var darr = [
    [1001, "김철수", 10, 20, 30],
    [1002, "박민정", 40, 60, 10],
    [1003, "이상아", 15, 10, 50],
    [1004, "조민수", 16, 40, 20],
]
/*
    위와 같은 배열이 있을때 각 학생별 총점을 구하고싶다고 할때 ,
    아래와 같이 식을 작성할것이다. 
*/

var total = [];
for (var i = 0; i < darr.length; i++) {
    total[i] = (darr[i][2] + darr[i][3] + darr[i][4]);
}
console.log(total)

/*
    위 식을 json 으로 바꿔보자.
*/
var jsonArr = [
    { "num": 1001, "name": "김철수", "math": 10, "eng": 20, "kor": 30 },
    { "num": 1002, "name": "박민정", "math": 40, "eng": 60, "kor": 10 },
    { "num": 1003, "name": "이상아", "math": 15, "eng": 10, "kor": 50 },
    { "num": 1004, "name": "조민수", "math": 16, "eng": 40, "kor": 20 },
]

var total = [];
for (var i = 0; i < jsonArr.length; i++) {
    total[i] = (jsonArr[i]['math'] + jsonArr[i]['eng'] + jsonArr[i]['kor']); // 코드가 훨신 직관적으로 변한다. 
}
console.log(total);

