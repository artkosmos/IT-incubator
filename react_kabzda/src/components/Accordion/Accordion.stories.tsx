import type {Meta, StoryObj} from '@storybook/react';
import Accordion from "./Accordion";


const items = [
  {title: 'Tea', value: 'green Indian tea'},
  {title: 'Coffee', value: '100% arabica with cinnamon'},
  {title: 'Cocktail', value: 'fresh and cold peach tea'},
]

const meta: Meta<typeof Accordion> = {
  title: 'Accordion',
  component: Accordion,
}

export default meta

type Story = StoryObj<typeof Accordion>

export const InteractiveMenu: Story = {
  argTypes: {
    callBack: {action: 'collapsed/opened menu'},
    onItemClick: {action: 'extra info about drink'}
  },
  args: {
    title: "Our drink menu",
    collapsed: true,
    items: items,
  }
}

// export const CollapsedMenu: Story = {
//   render: () => <Accordion
//     title={"Our drink menu"}
//     collapsed={true}
//     callBack={() => {}}
//     onItemClick={() => {}}
//     items={items}
//   />
// }

// export const OpenedMenu: Story = {
//   render: () => <Accordion
//     title={"Our drink menu"}
//     collapsed={false}
//     callBack={() => {}}
//     onItemClick={() => {}}
//     items={items}
//   />
// }

// const InteractiveMenuHandler = () => {
//   const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
//   return <Accordion
//     title={"Our drink menu"}
//     collapsed={isCollapsed}
//     callBack={() => {setIsCollapsed(!isCollapsed)}}
//     onItemClick={() => {}}
//     items={items}
//   />
// }
//
// export const InteractiveMenu: Story = {
//   render: () => <InteractiveMenuHandler/>
// }
