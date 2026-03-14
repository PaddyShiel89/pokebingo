import React from "react";
import "./grid-cell.scss";

interface GridCellProps {
  /** The name of the Pokémon. */
  name: string;
}

const GridCell: React.FC<GridCellProps> = (props) => {
  const componentClass = "grid-cell";

  return <div className={componentClass}>{props.name}</div>;
};

export default GridCell;
