import React from "react";
import Image from "next/image";
import "./grid-cell.scss";

interface GridCellProps {
  /** The name of the Pokémon. */
  name: string;

  /** The image for the Pokémon. */
  sprite: string;
}

const GridCell: React.FC<GridCellProps> = (props) => {
  const componentClass = "grid-cell";
  const imageWrapperClass = componentClass + "__image-wrapper";

  return (
    <div className={componentClass}>
      <div className={imageWrapperClass}>
        <Image alt="" fill={true} quality={100} src={props.sprite} />
      </div>
      <h3>{props.name}</h3>
    </div>
  );
};

export default GridCell;
