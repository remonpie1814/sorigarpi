// src/contexts/ToolContext.js
import React from "react";

const ToolContext = React.createContext({
  onMouseDownHandler: () => {},
  onMouseUpHandler: () => {},
  onMouseLeaveHandler: () => {},
  onMouseEnterHandler: () => {},
  onMouseMoveHandler: () => {},
});

export { ToolContext };
