const findNextPrime = (known: number[]): number => {
  let start = known[known.length - 1];
  let i = 0;
  while (i < known.length) {
    if (start % known[i] === 0) {
      i = 0;
      start++;
    } else {
      i++;
    }
  }
  return start;
}

// Given a sorted array, collect like elements into counted groups
const collect = (arr: number[]): Array<[number, number]> => {
  let out: Array<[number, number]> = [];
  if (arr.length === 0) {
    return out;
  }
  let current = arr[0];
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === current) {
      count++;
    } else {
      out.push([current, count]);
      current = arr[i];
      count = 1;
    }
  }
  out.push([current, count]);
  return out;
};

export const getPrimeFactors = (value: number): Array<[number, number]> => {
  let factors: number[] = [];
  // Find all primes less than the value
  let primes = [2, 3, 5, 7, 11, 13, 17];
  while (primes[primes.length - 1] < value) {
    primes.push(findNextPrime(primes));
  }
  // Find prime factors
  let i = primes.length - 1;
  while (value > 1) {
    if (value % primes[i] === 0) {
      value = value / primes[i];
      factors.push(primes[i]);
    } else {
      i--;
    }
    if (i < 0) {
      throw new Error('This should not be possible');
    }
  }
  return collect(factors.reverse());
};

export const getBinaryDigits = (value: number) => 
  value.toString(2).split('').map(x => parseInt(x));
