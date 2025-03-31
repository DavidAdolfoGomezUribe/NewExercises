console.log("all ok")

//solve
{

//second ex
// let arr = [1,0,3,6]
// function simple(arr) {
//     var total = 0
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
//     return total
// }
// console.log(simple(arr))

//third ex

// //input
// //Alice
// let a = [9,8,7]
// //bob
// let b = [7,8,9]

// //ouput
// //[1,1]

// function compareTriplets(a, b) {
//     var ScoreAB = [0,0]
//     var contadorA = 0
//     var contadorB = 0
		
//     for (let i = 0; i < 3; i++) {
			 

//         if (a[i]>b[i]) {
//             //sumar 1pt a Alice
//             contadorA ++

//         } else if(a[i]<b[i]) {
//             //sumar 1pt a bob
//             contadorB ++
//         } else {
//             //sumar 0
//         }
		
//     }
		


//     return ScoreAB = [contadorA,contadorB]
// }

// console.log(compareTriplets(a,b))

// //four ex
// let ar = [1000000001,1000000002,1000000003,1000000004,1000000005]
// function simple(ar) {
//      var total = 0
//      for (let i = 0; i < ar.length; i++) {
//          total += ar[i]
//      }
//      return total
//  }
//  console.log(simple(ar))

// //alto = ancho
// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
//     ]

// function diagonalDifference(arr) {
		
//     var totalOne = 0
//     var totalTwo = 0
		
//     for (let i = 0; i < arr.length; i++) {
				
//         totalOne = arr[i][i] + totalOne//eh?  no se puede usar totalOne += arr[i][i] ?
//         totalTwo = arr[i][(arr.length-1)-i] + totalTwo
						
//     }
		
//     return Math.abs(totalOne - totalTwo )
// }

// console.log(diagonalDifference(arr))

// // console.log(ar[i][i]) // de arriba abajo de izquierda a dercha

// // console.log(ar[i][(ar.length-1)-i]) // de arriba a abjo de derechaa izquierda

// let arr = [1,1,1,-1,0,-1]

// function plusMinus(arr) {
//     // Write your code here
//     let counterPostive = 0
//     let counterNegative = 0
//     let counterZero = 0


//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > 0) {
//             counterPostive ++
//         } else if(arr[i] < 0){
//             counterNegative ++
//         }else{
//             counterZero ++
//         }
				
				
//     }
		
		
// console.log((counterPostive/ arr.length).toFixed(6))
// console.log((counterNegative/arr.length).toFixed(6))
// console.log((counterZero/arr.length).toFixed(6))
// }

// plusMinus(arr)

// let n=3
// function staircase(n) {
//     // Write your code here
//     let counter = " "
//     let star = ""
//     for (let i = 0; i < n; i++) {
				
//         star = "#" + star
				
//         console.log(`${counter.repeat(n-i-1)}` + star) //interesante el metodo repeat
							 
//     }

// }

// staircase(n)

// let arr = [1,3,5,7,9] // 5 elementos

// function miniMaxSum(arr) {
//     // Write your code here
//     arr.sort()
//     let sumCounter = 0
//     let minusCounter = 0

//     for (let i = 0; i < arr.length-1; i++) {
				
//         sumCounter += arr[i]

//     }

//     for (let i = 1; i < arr.length; i++) {
				
//         minusCounter += arr[i]

//     }
//     console.log(sumCounter,minusCounter)
		
// }

// miniMaxSum(arr)


// //input       (1 1 1)
// let candles = [4,4,4,1,3]

// //ouput
// //3

// function birthdayCakeCandles(candles) {
//     // Write your code here
//     //reduce()
//     //Objet.value()
//     //Math.max()
//     //for.each

//     let counter = []
		
//     candles.forEach(element => {
//         if (counter[element]) {
//             counter[element] = counter[element] + 1 
//         } else {
//             counter[element] =  1 
//         }
				
//     });

		
//     // let maxValue = Math.max(...Object.values(counter))
//     let maxValue = Object.values(counter).reduce(function (max,current) {
//         return Math.max(max,current) 
//     },-Infinity)



//     console.log(maxValue);
//     return maxValue


//  }

// birthdayCakeCandles(candles)
}


//unsolved

let myArray = [2,5,6,7,1,2,3,8]

function processData(myArray) {
	let arrayOne = []
    let newArray = new Set(myArray)
		
	    for (const item of newArray.values()) {
				
	        arrayOne.push(item)
		}
        
        
        function compareNumbers(a, b) {
            return a - b;
        }
        
        arrayOne.sort(compareNumbers)
        
        //console.log(arrayOne);
        
        
		if ( arrayOne.length == 1) {
		    return console.log(arrayOne[0])
        } else {
		    return console.log(arrayOne[arrayOne.length-2])
        }
	
}

processData(myArray)

