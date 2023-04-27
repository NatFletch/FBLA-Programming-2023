import type { ComponentMeta, ComponentStory } from '@storybook/react'

import NavbarLayout from './NavbarLayout'

export const generated: ComponentStory<typeof NavbarLayout> = (args) => {
  return <NavbarLayout {...args} />
}

export default {
  title: 'Layouts/NavbarLayout',
  component: NavbarLayout,
} as ComponentMeta<typeof NavbarLayout>
