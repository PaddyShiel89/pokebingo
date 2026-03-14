import type { Meta, StoryObj } from "@storybook/react-vite";
import GridCell from ".";

const meta = {
  component: GridCell,
  title: "Grid cell",
  tags: ["autodocs"],
  args: {
    name: "Marowak",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/105.png",
  },
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof GridCell>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
