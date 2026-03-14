import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars } from "@fortawesome/free-solid-svg-icons/faMars";
import { faVenus } from "@fortawesome/free-solid-svg-icons/faVenus";
import cx from "classnames";
import Image from "next/image";
import "./grid-cell.scss";

interface GridCellProps {
  /** Colors used for sorting Pokémon in a Pokédex. The color listed in the
   * Pokédex is usually the color most apparent or covering each Pokémon's body. */
  color: string;

  /** The game or generation the Pokémon is being hunted in. There is no
   * validation for this, but it should be short text, e.g. HGSS instead of
   * HeartGold/Soul Silver. */
  game?: string;

  /** Whether the icon denoting the Pokémon as alpha should be displayed. */
  iconAlpha?: boolean;

  /** Whether the icon denoting the Pokémon as an egg should be displayed. */
  iconEgg?: boolean;

  /** The icon denoting the Pokémon's gender. If `undefined`, it won't be
   * displayed. */
  iconGender?: "male" | "female";

  /** Whether the icon denoting the Pokémon as shiny should be displayed. */
  iconShiny?: boolean;

  /** The name of the Pokémon. */
  name: string;

  /** Additional notes entered by the creator. */
  notes?: string;

  /** The image for the Pokémon. */
  sprite: string;
}

const GridCell: React.FC<GridCellProps> = (props) => {
  const componentClass = "grid-cell";
  const componentWithNotesClass = componentClass + "--with-notes";
  const componentClasslist = cx(componentClass, {
    [componentWithNotesClass]: !!props.notes,
  });

  const gameClass = componentClass + "__game";
  const imageWrapperClass = componentClass + "__image-wrapper";
  const iconsListClass = componentClass + "__icons-list";
  const notesClass = componentClass + "__notes";

  const useDarkIcons = ["white"].includes(props.color);

  const flatIconClass = componentClass + "__icon";
  const flatIconDarkClass = flatIconClass + "--dark";
  const flatIconClasslist = cx(flatIconClass, {
    [flatIconDarkClass]: useDarkIcons,
  });

  const styles: React.CSSProperties = {
    backgroundColor: `var(--pokemon-${props.color})`,
  };

  return (
    <div className={componentClasslist} style={styles}>
      <div className={imageWrapperClass}>
        <Image
          alt={props.name}
          fill
          quality={100}
          sizes="160px"
          src={props.sprite}
        />
      </div>
      {props.game && <span className={gameClass}>{props.game}</span>}
      {(props.iconShiny ||
        props.iconGender ||
        props.iconAlpha ||
        props.iconEgg) && (
        <ul className={iconsListClass}>
          {props.iconShiny && (
            <li>
              <Image
                alt="Shiny"
                className={flatIconClasslist}
                height={44}
                src="/icons/shiny.png"
                width={40}
              />
            </li>
          )}
          {props.iconGender && (
            <li>
              <FontAwesomeIcon
                color={useDarkIcons ? "black" : "white"}
                icon={props.iconGender === "female" ? faVenus : faMars}
                fontSize={30}
              />
            </li>
          )}
          {props.iconAlpha && (
            <li>
              <Image
                alt="Alpha"
                className={flatIconClasslist}
                height={58}
                src="/icons/alpha.png"
                width={61}
              />
            </li>
          )}
          {props.iconEgg && (
            <li>
              <Image
                alt="Egg"
                className={flatIconClasslist}
                height={102}
                src="/icons/egg.png"
                width={102}
              />
            </li>
          )}
        </ul>
      )}
      {props.notes && (
        <div className={notesClass}>
          <p>{props.notes}</p>
        </div>
      )}
    </div>
  );
};

export default GridCell;
