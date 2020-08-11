import React from 'react';

import InpuProps from '../../interfaces/index'

import './styles.css'

const Input: React.FC<InpuProps> = ({label, name,...rest}) => {
  return (
    <div className="input-block">
        <label htmlFor={name}>{label}</label>
        <input id={name} {...rest}/>
    </div> 
  );
}

export default Input;