
var jsonArr = [
    { "num": 1001, "name": "김철수", "math": 10, "eng": 20, "kor": 30 },
    { "num": 1002, "name": "박민정", "math": 40, "eng": 60, "kor": 10 },
    { "num": 1003, "name": "이상아", "math": 15, "eng": 10, "kor": 50 },
    { "num": 1004, "name": "조민수", "math": 16, "eng": 40, "kor": 20 },
]

/*
    
    [문제1]
        국어점수가 수학점수 보다 높은 학생들 번호 이름 출력 

    [문제2]
        국어 수학 영어 세과목의 평균이 30점이상이면  합격이다
        win 항목을 추가하고 합격이면 true , 불합격이면 false 추가 
      
    [문제3]
        rank 항목을 추가하고 총합에대한 등수 저장 
*/
console.log("=====================================================")

for (i = 0; i < jsonArr.length; i++) {
    if (jsonArr[i]["kor"] > jsonArr[i]["math"]) {
        console.log(jsonArr[i]["num"], "번", jsonArr[i]["name"], "학생")
    }
}
console.log("=====================================================")
var total = 0;
var average = 0;

for (i = 0; i < jsonArr.length; i++) {
    var win = false
    total += jsonArr[i]["kor"] + jsonArr[i]["math"] + jsonArr[i]["eng"]
    average = total / 3
    if (average >= 30) {
        win = true
        console.log(jsonArr[i]["name"], "학생 합격")
        console.log(win)
    } else {
        console.log(jsonArr[i]["name"], "학생 불합격")
        console.log(win)
    }
    total = 0
}

total = 0
var arr = [];
console.log("=====================================================================================")

//3과목 점수 총합 key와 value 추가
for (i = 0; i < jsonArr.length; i++) {
    total += jsonArr[i]["kor"] + jsonArr[i]["math"] + jsonArr[i]["eng"]
    jsonArr[i]["total"] = total
    total = 0
}
//등수 정렬
for (i = 0; i < jsonArr.length - 1; i++) {
    if (jsonArr[i]["total"] > jsonArr[i + 1]["total"]) {
        var temp = jsonArr[i]
        jsonArr[i] = jsonArr[i + 1]
        jsonArr[i + 1] = temp
    }
}

console.log(jsonArr[0])
console.log(jsonArr[1])
console.log(jsonArr[2])
console.log(jsonArr[3])

console.log("=====================================================================================")

var num = 1
//등수 저장
for (i = jsonArr.length - 1; i >= 0; i--) {
    jsonArr[i]["rank"] = num
    num += 1
}

console.log(jsonArr[0])
console.log(jsonArr[1])
console.log(jsonArr[2])
console.log(jsonArr[3])


