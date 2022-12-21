import { Button } from "../Button"
import EmptyList from "./EmptyList"
import List from "./List"

export default {
  title: "Components/List",
}

const Template = {
  children: "List",
}

export const Empty = () => <EmptyList />
Empty.args = { ...Template, children: "Empty List" }

export const ListStory = () => (
  <List>
    <div className="list-story">
      <Button>Test</Button>
      <span>First Category</span>
      <span>Not set</span>
      <span>Threads</span>
    </div>
  </List>
)
ListStory.args = { ...Template, children: "Sample List" }
