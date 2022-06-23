import React from "react";

import Checkbox from "@mui/material/Checkbox";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

export default function CheckboxHandler({ wonOscar, wonEmmy, handleOscars, handleEmmys, name }) {
  return (
    <>
      <td>
        <Checkbox
          icon={<EmojiEventsOutlinedIcon fontSize="large" />}
          checkedIcon={<EmojiEventsIcon fontSize="large" color="warning" />}
          defaultChecked = {wonOscar? true : false}
          onChange={() => handleOscars(name)}
        />
      </td>
      <td>
        <Checkbox              
          icon={<EmojiEventsOutlinedIcon fontSize="large" />}
          checkedIcon={<EmojiEventsIcon fontSize="large" color="warning" />}
          defaultChecked = {wonEmmy? true : false}
          onChange={() => handleEmmys(name)}
        />
      </td>
    </>
  );
}
