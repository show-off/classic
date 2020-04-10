import React from "react"
import "./button.css"

export const Button = ({
  className,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) => (
  <a className={`button ${className}`} {...props}>
    {props.children}
  </a>
)
