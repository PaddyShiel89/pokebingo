import React from "react";

interface GridCellProps {
  /** The name of the Pokémon. */
  name: string;
}

const GridCell: React.FC<GridCellProps> = (props) => {
  return <div>{props.name}</div>;
};

export default GridCell;
