import React, { FunctionComponent, useState } from 'react';
import { getBinaryDigits, getPrimeFactors } from './utils';

import './Prime.css';

const ESC = 27;
const ENTER = 13;

interface IProps {
  value: number
}

interface IValueMetaProps {
  prime: boolean;
}

const PrimeCircle: FunctionComponent<IProps & IValueMetaProps> = ({
  value,
  prime,
}) => {
  const color = prime ? 'red' : 'black';
  return (
    <div className="prime-circle-container">
      <div className="prime-circle">
        <div className={`prime-circle-value`} style={{color}}>{value}</div>
      </div>
    </div>
  );
};

const Expt: FunctionComponent<{
  base: number;
  power: number;
}> = ({
  base,
  power,
}) => (
  <div className="expt">
    <span className="expt-base">{base}</span>
    <span className="expt-power">{power}</span>
  </div>
);

const Binary: FunctionComponent<IProps> = ({
  value,
}) => {
  const binaryDigits = getBinaryDigits(value);
  return (
    <span className="binary">{binaryDigits.map((d, idx) =>
      <span className={d === 1 ? 'red' : ''} key={idx}>{d}</span>
    )}</span>
  );
};

const Prime: FunctionComponent<IProps> = ({
  value,
}) => {
  const factorization = getPrimeFactors(value);
  const prime = factorization.length === 1 && factorization[0][1] === 1;
  return (
    <div className="prime">
      <PrimeCircle value={value} prime={prime} />
      <div className="factors">{factorization.map(([base, power], idx) =>
        <Expt key={idx} base={base} power={power}/>
      )}</div>
      <Binary value={value}>
      </Binary>
    </div>
  );
};

export default Prime;
