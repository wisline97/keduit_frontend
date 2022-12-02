
var jsonArr = [
    { "num": 1001, "name": "김철수", "math": 10, "eng": 20, "kor": 30 },
    { "num": 1002, "name": "박민정", "math": 40, "eng": 60, "kor": 10 },
    { "num": 1003, "name": "이상아", "math": 15, "eng": 10, "kor": 50 },
    { "num": 1004, "name": "조민수", "math": 16, "eng": 40, "kor": 20 },
]

//문제 위 배열에 총점 항목과 평균 항목을 추가해보자

for (var i = 0; i < jsonArr.length; i++) {
    var total = jsonArr[i]["math"] + jsonArr[i]["eng"] + jsonArr[i]["kor"];
    jsonArr[i]["total"] = total;
    jsonArr[i]["avg"] = (total / 3).toFixed(2);
}

console.log(jsonArr);

