/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var charCounts = {};
    s.split('').forEach(function(element) {
        charCounts[element] ? charCounts[element]++ : charCounts[element] = 1;
    });

    var totalCount = 0;
    var hasOdd = false;
    for (var key in charCounts){
        var item = charCounts[key];
        if (item % 2) { 
            if (!hasOdd) hasOdd = true;
            totalCount += --item;
        }
        else totalCount += item;
    }

    return hasOdd? totalCount + 1 : totalCount;
};