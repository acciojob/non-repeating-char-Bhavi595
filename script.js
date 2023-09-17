function firstNonRepeatedChar(str) {
 // Write your code here
	let answer ='null'
       for(let i =0; i<str.length; i++){
           
           if(str.charAt(i)==str.charAt(i+1)){
                answer = str.charAt(i);
                return answer;
           }

       }

       return answer;
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
