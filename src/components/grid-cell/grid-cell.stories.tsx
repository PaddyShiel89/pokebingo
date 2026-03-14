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
    spriteSilhouette: false,
    useDarkIcons: false,
    useLightText: false,
  },
  argTypes: {
    color: {
      control: { type: "select" },
      options: [
        "red",
        "blue",
        "yellow",
        "green",
        "black",
        "brown",
        "purple",
        "gray",
        "white",
        "pink",
      ],
    },
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

export const Silhouette: Story = {
  name: "Sprite silhouette",
  args: {
    spriteSilhouette: true,
  },
};

export const Alpha: Story = {
  args: {
    iconAlpha: true,
  },
};

export const GenderedFemale: Story = {
  args: {
    iconGender: "female",
  },
};

export const GenderedMale: Story = {
  args: {
    iconGender: "male",
  },
};

export const Egg: Story = {
  args: {
    iconEgg: true,
  },
};

export const ShinyGendered: Story = {
  name: "Shiny gendered",
  args: {
    iconGender: "female",
    iconShiny: true,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/105.png",
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

export const GenderedAlpha: Story = {
  name: "Gendered alpha",
  args: {
    iconGender: "female",
    iconAlpha: true,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/105.png",
  },
};

export const GenderedEgg: Story = {
  name: "Gendered egg",
  args: {
    iconGender: "female",
    iconEgg: true,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/105.png",
  },
};

export const AlphaEgg: Story = {
  name: "Alpha egg",
  args: {
    iconAlpha: true,
    iconEgg: true,
  },
};

export const ShinyGenderedAlpha: Story = {
  name: "Shiny gendered alpha",
  args: {
    iconAlpha: true,
    iconGender: "female",
    iconShiny: true,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/105.png",
  },
};

export const ShinyGenderedEgg: Story = {
  name: "Shiny gendered egg",
  args: {
    iconEgg: true,
    iconGender: "female",
    iconShiny: true,
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/shiny/105.png",
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

export const GenderedAlphaEgg: Story = {
  name: "Gendered alpha egg",
  args: {
    iconAlpha: true,
    iconEgg: true,
    iconGender: "female",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/105.png",
  },
};

export const ShinyGenderedAlphaEgg: Story = {
  name: "Shiny gendered alpha egg",
  args: {
    iconAlpha: true,
    iconEgg: true,
    iconGender: "female",
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

export const WithNotes: Story = {
  name: "With notes",
  args: {
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    notes: "Mass outbreak",
  },
};

export const WithOverflowNotes: Story = {
  name: "With overflow notes",
  args: {
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    notes: "I'm going to catch a shiny alpha Marowak in a mass outbreak",
  },
};

export const Red: Story = {
  args: {
    color: "red",
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    name: "Charmander",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/4.png",
  },
};

export const Blue: Story = {
  args: {
    color: "blue",
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    name: "Squirtle",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/7.png",
  },
};

export const Yellow: Story = {
  args: {
    color: "yellow",
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    name: "Pikachu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/25.png",
  },
};

export const Green: Story = {
  args: {
    color: "green",
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    name: "Bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/1.png",
  },
};

export const Black: Story = {
  args: {
    color: "black",
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    name: "Umbreon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/197.png",
  },
};

export const Brown: Story = {
  args: {
    color: "brown",
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    name: "Vulpix",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/37.png",
  },
};

export const Purple: Story = {
  args: {
    color: "purple",
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    name: "Arbok",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/24.png",
  },
};

export const Gray: Story = {
  args: {
    color: "gray",
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    name: "Aggron",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/306.png",
  },
};

export const White: Story = {
  args: {
    color: "white",
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    name: "Gardevoir",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/282.png",
  },
};

export const Pink: Story = {
  args: {
    color: "pink",
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    name: "Sylveon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-vi/x-y/700.png",
  },
};

export const WithDarkIcons: Story = {
  name: "With dark icons",
  args: {
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    useDarkIcons: true,
    color: "yellow",
    name: "Pikachu",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/25.png",
  },
};

export const WithLightText: Story = {
  name: "With light text",
  args: {
    color: "black",
    iconAlpha: true,
    iconEgg: true,
    iconShiny: true,
    iconGender: "female",
    name: "Umbreon",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/heartgold-soulsilver/197.png",
    notes: "Mass outbreak",
    useLightText: true,
  },
};
