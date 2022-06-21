import React from "react";

import Checkbox from "@mui/material/Checkbox";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

export default function CheckboxHandler({ wonOscar, wonEmmy, handleOscars, handleEmmys, name }) {
  return (
    <>
      <td>
        {wonOscar ? (
          <p>
            <Checkbox
              icon={<EmojiEventsOutlinedIcon fontSize="large" />}
              checkedIcon={<EmojiEventsIcon fontSize="large" color="warning" />}
              defaultChecked
              onChange={() => handleOscars(name)}
            />
          </p>
        ) : (
          <p>
            <Checkbox             
              icon={<EmojiEventsOutlinedIcon fontSize="large" />}
              checkedIcon={<EmojiEventsIcon fontSize="large" color="warning" />}
              onChange={() => handleOscars(name)}
            />
          </p>
        )}
      </td>
      <td>
        {wonEmmy ? (
          <p>
            <Checkbox              
              icon={<EmojiEventsOutlinedIcon fontSize="large" />}
              checkedIcon={<EmojiEventsIcon fontSize="large" color="warning" />}
              defaultChecked
              onChange={() => handleEmmys(name)}
            />
          </p>
        ) : (
          <p>
            <Checkbox
              icon={<EmojiEventsOutlinedIcon fontSize="large" />}
              checkedIcon={<EmojiEventsIcon fontSize="large" color="warning" />}
              onChange={() => handleEmmys(name)}
            />
          </p>
        )}
      </td>
    </>
  );
}
