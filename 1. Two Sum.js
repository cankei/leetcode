/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var numsSeen = {};
  for (var i = 0; i < nums.length; i++) {
    var complement = target - nums[i];
    if (complement in numsSeen) {
      return [numsSeen[complement], i];
    }
    numsSeen[nums[i]] = i;
  }
};