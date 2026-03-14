import type { Meta, StoryObj } from "@storybook/react-vite";
import GridCell from ".";

const meta = {
  component: GridCell,
  title: "Grid cell",
  tags: ["autodocs"],
  args: {
    color: "brown",
    iconAlpha: false,
    iconEgg: false,
    iconShiny: false,
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

export const Shiny: Story = {
  args: {
    iconShiny: true,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/105.png",
  },
};

export const Alpha: Story = {
  args: {
    iconAlpha: true,
  },
};

export const Egg: Story = {
  args: {
    iconEgg: true,
  },
};

export const ShinyAlpha: Story = {
  name: "Shiny alpha",
  args: {
    iconAlpha: true,
    iconShiny: true,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/105.png",
  },
};

export const ShinyEgg: Story = {
  name: "Shiny egg",
  args: {
    iconEgg: true,
    iconShiny: true,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/105.png",
  },
};

export const AlphaEgg: Story = {
  name: "Alpha egg",
  args: {
    iconAlpha: true,
    iconEgg: true,
  },
};

export const ShinyAlphaEgg: Story = {
  name: "Shiny alpha egg",
  args: {
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/105.png",
  },
};

export const WithGame: Story = {
  name: "With game",
  args: {
    game: "HG",
  },
};

export const WithGen: Story = {
  name: "With generation",
  args: {
    game: "Gen IV",
  },
};
