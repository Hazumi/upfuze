import React from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fill?: boolean
}

export const Button: React.FC<Props> = ({
  children,
  fill,
  ...props
}) => {
    const className = `upfuze-btn ${fill ? 'fill' : ''}`.trim()
    return (
      <button className={className} {...props}>
        { children }
      </button>
    )
}

