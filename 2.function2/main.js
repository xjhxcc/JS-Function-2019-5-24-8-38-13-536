function palindrome(message){
	if(message==message.split('').reverse().join('')){
		console.log(message+"是");
	}else{
		console.log(message+"不是");
	}	
}
palindrome('hello'); //false

palindrome('abcba'); //true
