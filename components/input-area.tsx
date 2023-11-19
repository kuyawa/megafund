import React, { HTMLProps } from 'react'

interface InputAreaProps {
  label?: string;
  info?: string;
  value?: string;
  className?: string;
}

export default function InputArea({ label, info, value, className, ...props }: InputAreaProps & HTMLProps<HTMLInputElement>){
  return (
    <div>
      <label className={`${className ?? ''}`}>{label}</label>
      <textarea>{value}</textarea>
      <label className='info'>{info}</label>
    </div>
  )
}