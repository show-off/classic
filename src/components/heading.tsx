import React from "react"
import "./heading.css"

export const Heading = ({
  className,
  ...props
}: React.HTMLProps<HTMLHeadingElement>) => (
  <h1 className={`heading ${className}`} {...props}>
    {props.children}
  </h1>
)
