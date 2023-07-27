export const btnMotion = {
  rest: {
    color: "#fff",
    transition: {
      duration: 0.24,
    },
  },
  hovered: {
    color: "yellow",
    transition: {
      duration: 0.24,
    },
  },
  clicked: {
    color: "yellow",
    transition: {
      duration: 0.16,
    },
  },
};

export const btnBorderMotion = {
  rest: {
    background: "linear-gradient(#ffffff90, #ffffff90, #ffffff90) border-box",
    borderRadius: "8px",
    transition: {
      duration: 0.24,
    },
  },
  hovered: {
    background: "linear-gradient(#ffff00, #ffff00, #ffff00) border-box",
    borderRadius: "12px",
    transition: {
      duration: 0.24,
    },
  },
  clicked: {
    background: "linear-gradient(#ffff0080, #ffff00, #ffff0080) border-box",
    borderRadius: "12px",
    transition: {
      duration: 0.16,
    },
  },
};

export const btnBgMotion = {
  rest: {
    width: "calc(100% - 0px)",
    height: "calc(100% - 0px)",
    color: "",
    backgroundColor: "#D9D9D630",
    transition: {
      duration: 0.24,
    },
  },
  hovered: {
    width: "calc(100% - 8px)",
    height: "calc(100% - 8px)",
    backgroundColor: "#FFEE0020",
    transition: {
      duration: 0.24,
    },
  },
  clicked: {
    width: "calc(100% - 12px)",
    height: "calc(100% - 12px)",
    backgroundColor: "#FFEE0016",
    transition: {
      duration: 0.16,
    },
  },
};
