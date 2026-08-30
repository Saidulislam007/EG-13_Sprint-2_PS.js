/**
 * @param {string} str
 * @return {string}
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

/**
 * @param {string} str
 * @return {boolean}
 */
function isPalindrome(str) {
  return str === reverseString(str);
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function sumArray(nums) {
  let sum = 0;

  for (const num of nums) {
    sum += num;
  }

  return sum;
}

/**
 * @param {string} str
 * @return {number}
 */
function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (const character of str.toLowerCase()) {
    if (vowels.includes(character)) {
      count++;
    }
  }

  return count;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const seenNumbers = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (seenNumbers.has(complement)) {
      return [seenNumbers.get(complement), i];
    }

    seenNumbers.set(nums[i], i);
  }

  return [];
}

/**
 * @param {Array} arr
 * @return {Array}
 */
function flattenArray(arr) {
  const flattened = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      flattened.push(...flattenArray(item));
    } else {
      flattened.push(item);
    }
  }

  return flattened;
}


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
  const groups = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (!groups.has(key)) {
      groups.set(key, []);
    }

    groups.get(key).push(str);
  }

  return Array.from(groups.values());
}

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  const lastSeenIndex = new Map();
  let windowStart = 0;
  let longestLength = 0;

  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    const character = s[windowEnd];

    if (
      lastSeenIndex.has(character) &&
      lastSeenIndex.get(character) >= windowStart
    ) {
      windowStart = lastSeenIndex.get(character) + 1;
    }

    lastSeenIndex.set(character, windowEnd);
    longestLength = Math.max(
      longestLength,
      windowEnd - windowStart + 1
    );
  }

  return longestLength;
}

/**
 * @param {Object} obj
 * @return {Object}
 */
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => deepClone(item));
  }

  const clonedObject = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      clonedObject[key] = deepClone(obj[key]);
    }
  }

  return clonedObject;
}