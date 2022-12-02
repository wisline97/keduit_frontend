<script>
    /*
        철수는 타자연습 게임을 만들기 위해 단어들을 선정했다. 
        문제를 단순히 내면 재미없기때문에 두글자는 단어대신 * 로 출력하려고한다. 
        * 위치는 랜덤이고,   별은 반두시 두개가되도록 각단어들을 만들어서 
        새로운배열에 저장후 출력하시오.

        [예시]
            h*m*
            *eac*
            spr**ng
            fr*nt*nd
            java*cr*pt
    */
        function getCheckStar(str){
            var count = 0;
            for(var i = 0; i < str.length; i++){
                if(str[i] == "*"){
                    count += 1;
                }
            }
            return count;
        }   
        function getChangeWord(word){
            var newWord = "";
            while(true){        
                var index1 = Math.floor (Math.random() * word.length); 
                var index2 = Math.floor( Math.random() * word.length);
                for(var i = 0; i < word.length; i++){
                    if(i == index1 || i == index2){
                        newWord += "*"
                    }else{
                        newWord += word[i];
                    }
                }
               
                var count = getCheckStar(newWord);
                if(count == 2){
                    break;
                }
                newWord = "";
            }
            return newWord;
        }
        function getSolution(wordTest){
            var arr = [];
            for(var i = 0; i < wordTest.length; i++){
                var newWord = getChangeWord(wordTest[i]);
                arr.push(newWord);
            }
            return arr;
        }
        var wordTest = ["html" , "react" , "spring" , "frontend" , "javascript"]
        var wordList = getSolution(wordTest);
        console.log(wordList);
  </script>