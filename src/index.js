module.exports = function toReadable (number) {
  const units = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine'
  };
  const teens = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };
  const tens = {
    2: 'twenty',
    3: 'thirty',
    4: 'forty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninety'
  };

  if (number ===0){
    return "zero";
  }
  let rankUnits = Math.floor(number % 10);
  if(number > 0 && number <= 9){
    return units[number];
  }
  if (number >= 10 && number <= 19){
    return teens[number];
  }

  let rankTens = Math.floor(number / 10);
  if(number >= 20 && number <= 99){
    return `${tens[rankTens]} ${units[rankUnits]}`.trim();
  }

  let rankHundreds = Math.floor(number / 100);
  if(number >= 100 && number <= 999){
    rankTens = Math.floor(number % 100);
    if(rankTens < 10){
      return `${units[rankHundreds]} hundred ${units[rankUnits]}`.trim();
    }
    if (rankTens >= 10 && rankTens <= 19) {
      return `${units[rankHundreds]} hundred ${teens[rankTens]}`.trim();
    }
    rankTens = Math.floor(rankTens / 10);
      return `${units[rankHundreds]} hundred ${tens[rankTens]} ${units[rankUnits]}`.trim();
  }
}
