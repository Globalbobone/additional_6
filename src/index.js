module.exports = function zeros(expression) {
	var arr = expression.split("*");  		//split to array
	var n = 5;
	var n2 = n*2;
	var z = 5;
	var res1 = 0;
	var res2 = 0;
	var res3 = 0; 
	var res4 = 0; 
	var count1 = 0;
	var count2 = 0;
	var count3 = 0;
	var count4 = 0;
	var arrfuc = []; 		//	!
	var arrfuc2 = [];		//  !!
	for (var j=0; j < arr.length; j++) {     // minus one "!"
		arr[j] = arr[j].replace("!", "");
		}
	for (var i = 0; i < arr.length; i++) {
		if ((arr[i].indexOf("!")+1) == 0) {                        //arr !
			arrfuc.push(arr[i]);
			}
		else {
			arr[i] = arr[i].replace(/[!]/gim,'');										//arr !!
			arrfuc2.push(arr[i]);
			}
		}
	for (var i = 0; i < arrfuc.length; i++) {								// 000 in !
				n = 5;
			while (Math.floor(+(arrfuc[i]) / n) >= 1) {   
			  count1 = Math.floor(+arrfuc[i] / n); 
        res1 = count1 + res1;
        n = n * 5; 
    		}
  	}
  for (var i = 0; i < arrfuc2.length; i++) {								// 000 in !!
			if ((arrfuc2[i] % 2) === 0) {												 // если четные n!! = n^(n/2) * (n/2)!
				n = 5;																								// используем для расчета одинарные
				while (Math.floor((+arrfuc2[i] / 2) / n) >=1) { 	
					count2 = Math.floor((+arrfuc2[i] / 2) / n); 			 
        	res2 = count2 + res2;
        	n = n * 5;
      	  }																				
				}
     	else {																									// если нечетные n!! = n! / (2^((n-1)/2) * ((n-1)/2)!
				  n = 5;																							// используем для расчета одинарные
				  z = 5; 
				while (Math.floor(+(arrfuc2[i]) / n) >= 1) {   			
				 	count3 = Math.floor(+arrfuc2[i] / n);
				 		if (Math.floor((((+arrfuc2[i]  - 1) / 2) / z) >= 1)) {			// считаем сколько нолей в знаменателе
				 			count4 = Math.floor(((+arrfuc2[i]  - 1) / 2) / z);
				 			res4 = count4 + res4;
				 			z = z * 5; 
				 		} 
				 			else {
				 				res3 = 0 + res3;
				 			}
        	res3 = count3 + res3;
        	n = n * 5; 
   			} 
   		}		
  	}
	if (res1 == 0 & res2 == 0){
		return 0;
		}
	else{ 
 		return (( res1 + res2 + res3 - res4 ));   	// складываем все вычисления, не забыв отнять те что в знаменателе
		} 
}

	