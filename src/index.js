module.exports = function toReadable (number) {
    let result ="";
    let NUMBS = 
    {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",

    }
    let strnumb = String(number)
    
    if (number === 0) { return "zero"}

    else if (number > 0 && number <= 20)
    {
        result += NUMBS[number]
    }
    else if (number > 20  && number < 100)
    {
        result += getNumber(NUMBS, number)
    }
    else if ( number >= 100 && number < 1000)
    {
        
        if ( number % 100 === 0) 
        {
            
            return NUMBS[Number(strnumb[0])] + " " + "hundred";
        }
        else
        {
            
            result += NUMBS[Number(strnumb[0])]+" "+"hundred"+" "+ getNumber(NUMBS, number % 100);
            
        }
        
    }
    
  return result;
}

function getNumber (NUMBS, number)
{
    let numb = ""
    if ( number % 10 === 0)
       {
        numb += NUMBS[number]
       }
       else if (number < 10)
       {
           numb += NUMBS[number]
       }
       else if ( number > 10  && number < 20)
       {
           numb += NUMBS[number]
       }
       else 
         {
            numb += NUMBS[number - (number % 10)] + " " + NUMBS[number % 10]
        }
    return numb;
}
