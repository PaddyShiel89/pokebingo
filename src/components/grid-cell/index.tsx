import React from "react";
import Image from "next/image";
import "./grid-cell.scss";

interface GridCellProps {
  /** Colors used for sorting Pokémon in a Pokédex. The color listed in the
   * Pokédex is usually the color most apparent or covering each Pokémon's body. */
  color: string;

  /** Whether the icon denoting the Pokémon as alpha should be displayed. */
  iconAlpha: boolean;

  /** Whether the icon denoting the Pokémon as an egg should be displayed. */
  iconEgg: boolean;

  /** Whether the icon denoting the Pokémon as shiny should be displayed. */
  iconShiny: boolean;

  /** The name of the Pokémon. */
  name: string;

  /** The image for the Pokémon. */
  sprite: string;
}

const GridCell: React.FC<GridCellProps> = (props) => {
  const componentClass = "grid-cell";
  const imageWrapperClass = componentClass + "__image-wrapper";
  const iconsListClass = componentClass + "__icons-list";

  return (
    <div className={componentClass} style={{ backgroundColor: props.color }}>
      <div className={imageWrapperClass}>
        <Image alt={props.name} fill={true} quality={100} src={props.sprite} />
      </div>
      <ul className={iconsListClass}>
        {props.iconShiny && (
          <li>
            <Image alt="Shiny" height={44} src="/icons/shiny.png" width={40} />
          </li>
        )}
        {props.iconAlpha && (
          <li>
            <Image alt="Alpha" height={58} src="/icons/alpha.png" width={61} />
          </li>
        )}
        {props.iconEgg && (
          <li>
            <Image alt="Egg" height={102} src="/icons/egg.png" width={102} />
          </li>
        )}
      </ul>
    </div>
  );
};

export default GridCell;
