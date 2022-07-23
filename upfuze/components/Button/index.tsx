import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<Props> = ({
  children,
  ...props
}) => {
    return (
      <button className="upfuze-btn" {...props}>
        { children }
      </button>
    )
}

