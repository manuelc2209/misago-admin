import React from "react"
import classnames from "classnames"

interface EmptyListProps {
  className?: string
}

const EmptyList: React.FC<EmptyListProps> = ({ className }) => (
  <div className={classnames("empty-list", className)}>Empty List</div>
)

export default EmptyList
