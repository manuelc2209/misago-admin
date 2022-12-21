import React, { ReactElement } from "react"
import classnames from "classnames"

interface ListProps {
  children: ReactElement | ReactElement[]
  className?: string
}

const List: React.FC<ListProps> = ({ children, className }) => (
  <div className={classnames("list", className)}>{children}</div>
)

export default List
