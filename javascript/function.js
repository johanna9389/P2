
				//A
				function isArmstrong(n){
					"use strict"
								
					n = String(n);
					if (n.length > 5) {
						return;
					}

					var sum = 0;

					for (var i = 0; i < n.length; i++){
					sum = sum + Math.pow(parseInt(n[i]), n.length);
								}

					if (parseInt(n) == sum)
						return true;
					else 
						return false;
				}

				//B
				function allArmstrongs(){
					var result ='';

					result = result + 1;
				    for (var i = 2; i < 100000; i++){

				    	if(isArmstrong(i)){
				    		result = result + ', '+ i;
				    	}
				    }
				    return result;
				 }

				 // C
				function allSubstrings1(str){

					var result = "";

				    for (var i = 0; i < str.length; i++) {
				    	for (var j = i+1; j < str.length + 1; j++) {
				    		result += str.substring(i,j) + ", ";
				    	}
				    }

				    return result.substring(0, result.length-2);
				}

				// D
				function allSubstrings2(str) {
					var arr = new Array();

					for (var i = 0; i < str.length; i++) {
				    	for (var j = i+1; j < str.length + 1; j++) {
				    		arr.push(str.substring(i,j))
				    	}
				    }

				    return arr;
				}

				// E
				function maxWord(str) {
					var arr = str.split(" ");
					
					var maxWord = "";
					for (var i = 0; i < arr.length; i++) {
						tempStr = arr[i];
						if (tempStr.length > maxWord.length){
							maxWord = tempStr;
						}
					}

					return maxWord;
				}