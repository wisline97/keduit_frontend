    /*
        함수밖에서 선언한 a와 함수의 매개변수인 a는 서로 다른변수이다. 
    */
    //아래 코드에서 a는 그냥 동명이인
    function check(a1){ 
        // 전단될 값을 새로운 a에 10을 저장한것이다.
        // 여기서 a의 값을 20으로 변경해도 아래 변수 a에 대한값은 변함없다.
        a1 = 20;
    }
    function main(){
        var a2 = 10;
        check(a2); // a 의 값만 함수로 전달된것이다 
        console.log(a2); // 그대로 10이 저장된다.
        
        console("------------------------");
        var b = 10;
        var c =  b;
        c = 20;
        console(b);
    }
    main();

    var mainA = 10;
    var checkA = mainA;
    checkA = 20;
    console.log(mainA);

    // b 의 값은? 여기서 b와 c는 서로 다른변수이기때문에 
    // c의 값을 바꿔도 b는 영향이 없다. 
    // 여기서 b는 위의 함수 밖의 a와 같으며,
    // 여기서 c는 위의 함수 안의 a와 같다.

