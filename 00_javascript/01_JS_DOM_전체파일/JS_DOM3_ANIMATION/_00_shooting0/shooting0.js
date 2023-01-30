function drawPlayer(){
    ctx.beginPath(); // 그리기 시작

    ctx.rect(0, 0, 100, 100);
    ctx.fillStyle = "blue";
    ctx.fill();

    ctx.closePath(); // 그리기 종료
}

//-------------------------------------------------
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d"); // => 브러쉬 역할 이 브러쉬를 가지고 2D 그림을 만들건지 3D 그림을 만들건지 지정하는 코드
drawPlayer();