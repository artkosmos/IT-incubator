import type {Meta, StoryObj} from '@storybook/react';
import {CustomSelect} from "./CustomSelect";
import {useState} from "react";


const meta: Meta<typeof CustomSelect> = {
  title: 'CustomSelect',
  component: CustomSelect,
}

export default meta

type Story = StoryObj<typeof CustomSelect>

const SelectWithHook = () => {
  const items = [
    {title: 'Tea', value: '1'},
    {title: 'Coffee', value: '2'},
    {title: 'Cocktail', value: '3'},
  ]
  const [value, setValue] = useState<string>('1')

  return <CustomSelect callBack={setValue} value={value} items={items}/>
}

export const CustomSelectMenu: Story = {
  render: () => <SelectWithHook/>
}

// export const MenuLikeSelect: Story = {
//   argTypes: {
//     callBack: {action: 'send value of selected item'},
//   },
//   args: {
//     value: '1',
//     items: [
//       {title: 'Tea', value: '1'},
//       {title: 'Coffee', value: '2'},
//       {title: 'Cocktail', value: '3'},
//     ]
//   }
// }