import React from "react";
import Avatar from "@mui/material/Avatar";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import CheckboxHandler from "./CheckboxHandler";

import TableBody from "@mui/material/TableBody";

export default function ContactItem({
  name,
  pictureUrl,
  popularity,
  wonOscar,
  wonEmmy,
  handleDelete,
  handleOscars,
  handleEmmys,
  StyledTableRow,
  StyledTableCell,
}) {
  if (false) {
    return <p>Loading...</p>;
  } else {
    return (
      <TableBody>
        <StyledTableRow>
          <StyledTableCell>
            <Avatar
              className="center"
              variant="rounded"
              alt={name}
              src={pictureUrl}
              sx={{ width: 50, height: 75 }}
            />
          </StyledTableCell>
          <StyledTableCell align="center">
            {name}{" "}
            <IconButton onClick={() => handleDelete(name)}>
              <DeleteIcon color="error" />
            </IconButton>{" "}
          </StyledTableCell>
          <StyledTableCell align="center">{popularity}</StyledTableCell>
          <CheckboxHandler
            handleOscars={handleOscars}
            handleEmmys={handleEmmys}
            wonOscar={wonOscar}
            wonEmmy={wonEmmy}
            name={name}
            StyledTableCell={StyledTableCell}
          />
        </StyledTableRow>
      </TableBody>
    );
  }
}
