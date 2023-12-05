import React, {FC, useState} from 'react'


export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary',
}

interface CardPros {
  width?: string
  height?: string
  variant?: CardVariant
  children?: React.ReactNode
  onClick: (num: number) => void
}

const Card: FC<CardPros> = ({width, height, variant, children,onClick}) => {

const [state, setState] = useState(0)

  return ( 
    <div 
      onClick={() => onClick(state)}
      style={{
        width,
       border: variant === CardVariant.outlined ? 'solid 1px grey' : 'none',
       background: variant === CardVariant.primary ? 'grey' : '', 
       height}}
      >
      {children}
    </div>
  );
}
 
export default Card;