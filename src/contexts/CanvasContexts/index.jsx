// src/contexts/CanvasContext.js
import React from "react";

const CanvasContext = React.createContext({
  currentTool: { name: "pen", lineWidth: 10 },
  setCurrentTool: () => {},
  currentPageId: "",
  setCurrentPageId: () => {},
  currentHistory: [],
  setCurrentHistory: () => {},
  dataurl: "",
  setDataurl: () => {},
  canvasRef: null,
  drawImageToCanvas: () => {},
});

export { CanvasContext };
