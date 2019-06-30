import React, { FunctionComponent, useState, useEffect } from 'react';
import Prime from './Prime';

import './Primes.css';

interface IProps {
  start: number;
  nextValue: (last: number) => number;
  iterate?: boolean;
  isDone: (value: number) => boolean;
}

const Primes: FunctionComponent<IProps> = ({
  start,
  nextValue,
  iterate,
  isDone,
}) => {
  const [primes, setPrimes] = useState<number[]>([]);

  useEffect(() => {
    setPrimes([start]);
  }, [start]);

  useEffect(() => {
    if (iterate) {
      const allValues = [start];
      while (!isDone(allValues[allValues.length - 1])) {
        allValues.push(nextValue(allValues[allValues.length - 1]));
      }
      setPrimes(allValues);
    }
  }, [iterate, isDone, start]);

  const handleClick = () => {
    setPrimes(primes => {
      if (!isDone(primes[primes.length - 1])) {
        return [...primes, nextValue(primes[primes.length - 1])];
      }
      return primes;
    });
  }
  return (
    <div className="primes" onClick={handleClick}>{primes.map((p, idx) =>
      <Prime value={p} key={idx} />
    )}</div>
  );
};

export default Primes;
