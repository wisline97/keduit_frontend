
/*
	  철수는 편의점에서 아르바이트를 하고있다. 
	  장사가 잘되서 라면이 많이 팔렸다. 
	  진열장은 최대 10개를 채울수있다.
 	
	  재고는 4칸의 상자에 5개씩 담겨져있다.
 	
	  진열장을 앞에서부터 순처적으로채워넣고 결과를 출력하시오.
 	
	  [예]
			각진열장마다 필요한개수는 아래와같다.
			{6, 10, 1, 7, 9}
	  	
			하지만 가진 재고가 모자르기때문에 최대 아래와같이 채워넣을수있다.
			{10, 10, 10, 6, 1};
	  	

    
 */
function insertItem(진열장, 재고) {
	var index1 = 0;
	var index2 = 0;

	while (true) {
		var c = 0;
		for (var i = 0; i < 재고.length; i++) {
			if (재고[i] == 0) {
				c += 1;
			}
		}
		if (c == 재고.length) {
			break;
		}

		var c = 0;
		for (var i = 0; i < 진열장.length; i++) {
			if (진열장[i] == 10) {
				c += 1;
			}
		}
		if (c == 진열장.length) {
			break;
		}


		if (진열장[index1] == 10) {
			index1 += 1;
		}
		else if (재고[index2] == 0) {
			index2 += 1;

		} else {

			진열장[index1] += 1;
			재고[index2] -= 1;
		}

	}
	console.log(진열장, 재고);

}

var 진열장 = [4, 0, 9, 3, 1];

var 재고 = [5, 5, 5, 5];

insertItem(진열장, 재고);