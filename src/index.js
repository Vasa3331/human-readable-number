module.exports = function toReadable (number) {
    let str = [];
    let dictionary1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let dictionary2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dictionary3 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let digit1 = number % 10;
    let digit2 = Math.floor(number / 10) % 10;
    let digit3 = Math.floor(number / 100) % 10;
    if (number == 0) {
        return 'zero';
    } else {
        if (digit3 >= 1 && digit3 <= 9) {
            str.push(dictionary1[digit3 - 1], 'hundred');  
        }
        if (digit2 >= 2 && digit2 <= 9 && digit1 > 0 && digit1 <= 9) {
            str.push(dictionary3[digit2 - 2]);
            str.push(dictionary1[digit1 - 1]); 
        }
        else if (digit2 >= 2 && digit2 <= 9 && digit1 == 0) {
            str.push(dictionary3[digit2 - 2]);
        }
        else if (digit2 == 1 && digit1 >= 0 && digit1 <= 9) {
            str.push(dictionary2[digit1]); 
        }
        else if (digit2 == 0 && digit1 >= 1 && digit1 <= 9) {
            str.push(dictionary1[digit1 - 1]); 
        }
    }
    return str.join(' ');
}