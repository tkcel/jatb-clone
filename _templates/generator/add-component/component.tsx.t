---
to: "src/components/<%= componentSize %>s/<%= name %>/<%= name %>.tsx"
unless_exists: true
---
import styles from './<%= name %>.module.css'

interface <%= name %>Props {
  text?: string
}

export const <%= name %> = ({ text }: <%= name %>Props): JSX.Element => {
  return <div>{text}</div>
}