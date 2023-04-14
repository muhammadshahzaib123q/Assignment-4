// -------------------------TASK 1-----------------------------------------

function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
        sum += numbers[i];
      }
    }
    return sum;
  }
  let numbers = [1, 2, 3, 4, 5, 6];
  let sumOfEvens = sumEvenNumbers(numbers);
  console.log("Sum of All Even Numbers is " +sumOfEvens)
    // --------------------------------------------------------------------------

    //   -------------------------TASK 2---------------------------------------

    function countVowels(str) {
        const vowels = ['a', 'e', 'i', 'o', 'u'];
        let count = 0;
        for (let i = 0; i < str.length; i++) {
          if (vowels.includes(str[i].toLowerCase())) {
            count++;
          }
        }
        return count;
      }
      const str = "Hello, World!";
      const numVowels = countVowels(str);
      console.log(numVowels)
    // --------------------------------------------------------------------------
    //   --------------------------TASK 3----------------------------------------

    function longestString(string) {
        let Length = 0;
    
        for (let i = 0; i < string.length; i++) {
          if (string[i].length > Length) {
            Length = string[i].length;
          }
        }
    
        return Length;
      }
    
      let strings = longestString(["apple", "banana", "pear", "grapefruit","mango","pineapple"]);
      console.log("Length of Longest string in array is "+strings)
     // --------------------------------------------------------------------------
     //   --------------------------------TASK 4------------------------------------

     function averageOfNumbers(numbers) {
        let sum = 0;
      
        for (let i = 0; i < numbers.length; i++) {
          sum += numbers[i];
        }
      
        let average = sum / numbers.length;
        return average;
      }
      
      let average =averageOfNumbers([1,2,3,4,5,6,7,8,9,10]);
      console.log("Average of all the numbers in array is "+average);
      // --------------------------------------------------------------------------
      //   ---------------------------------TASK 5-----------------------------------

      function getKeys(obj) {
        let keys = Object.keys(obj);
        return keys;
      }
      
      let myObject =
       {
         name: "Ammar",
         age: 20, 
         city: "Karachi" 
        };
      let output = getKeys(myObject);
      console.log(output)
      // --------------------------------------------------------------------------
      //   ----------------------------------TASK 6----------------------------------

      let arrayobj=[
        {
            name: "Ahsan",
            Age:    30
        },
        {
            name: "Bilal",
            Age:    25
        },
        {
            name: "Arbaz",
            Age:    35
        }
    ]
    function ArrayObject(a,b){
        let output=[];
        for(let i=0;i<a.length;i++){
            output.push(a[i][b]);
        }
        return output;
    }
    
    console.log(ArrayObject(arrayobj,"name"))
     // --------------------------------------------------------------------------
     //   -------------------------------TASK 7-------------------------------------

     
  function finduniquearray(arr){
    return  [... new Set (arr)]
  }
  const arr =  ["apple", "mango", "banana", "apple", "mango", "pear", "pear", "orange", "mango"] ;
  const getarray = finduniquearray(arr)
    
  console.log(getarray)
  // --------------------------------------------------------------------------
  //   --------------------------------TASK 8------------------------------------

  function Product(array) {
    let product = 1;

    for (let i = 0; i < array.length; i++) {
      product *= array[i];
    }

    return product;
  }

  let Array = [8, 5, 4];
  let product = Product(Array);
  console.log("Product of all the numbers in array is "+product)
  // --------------------------------------------------------------------------



  



