import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
    "green"
  ];

  const colorElements = colors.map((color) => {
    return <li style={{ color: color }}>{color}</li>
  });

  return (
    <div>
      {/* have to manually change this */}
      <h1>Top 5 CSS Colors</h1>
      <ol>



        <li style={{ color: colors[0] }}>{colors[0]}</li>
        <li style={{ color: colors[1] }}>{colors[1]}</li>
        <li style={{ color: colors[2] }}>{colors[2]}</li>
        <li style={{ color: colors[3] }}>{colors[3]}</li>
        <li style={{ color: colors[4] }}>{colors[4]}</li>
        {/* hahve to manually change these values too. Posibility to mess up array numbering is high. */}
        <li style={{ color: colors[5] }}>{colors[5]}</li>

      </ol>

      <h1>Top {colorElements.length} CSS Colors: Lists and Keys</h1>
      {colorElements}


    </div>
  );
}

export default ColorList;
