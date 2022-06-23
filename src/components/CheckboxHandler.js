import React from "react";

import Checkbox from "@mui/material/Checkbox";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";

export default function CheckboxHandler({ wonOscar, wonEmmy, handleOscars, handleEmmys, name, StyledTableCell }) {
  return (
    <>
      <StyledTableCell align="center">
        <Checkbox
          icon={<EmojiEventsOutlinedIcon fontSize="large" />}
          checkedIcon={<EmojiEventsIcon fontSize="large" color="warning" />}
          defaultChecked = {wonOscar? true : false}
          onChange={() => handleOscars(name)}
        />
      </StyledTableCell>
      <StyledTableCell align="center">
        <Checkbox              
          icon={<EmojiEventsOutlinedIcon fontSize="large" />}
          checkedIcon={<EmojiEventsIcon fontSize="large" color="warning" />}
          defaultChecked = {wonEmmy? true : false}
          onChange={() => handleEmmys(name)}
        />
      </StyledTableCell>
    </>
  );
}
