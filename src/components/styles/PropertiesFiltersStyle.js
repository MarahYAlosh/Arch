
export const containerStyle = {
  width: "100%",
  p: 2,
};

export const tabsWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  mb: 2,
};

export const tabsStyle = {
  "& .MuiTab-root": {
    minWidth: 100,
    fontWeight: "bold",
    border: "1px solid black",
    borderRadius: 0,
    color: "black",
  },
  "& .Mui-selected": {
    backgroundColor: "#1A1A1A",
    color: "white !important",
  },
};

export const filterBoxStyle = {
  display: "flex",
  gap: 2,
  alignItems: "center",
  flexWrap: "wrap",
  justifyContent: "center",
  border: "1px solid #ccc",
  p: 2,
};

export const searchFieldStyle = {
  minWidth: 180,
};

export const formControlStyle = {
  minWidth: 160,
};

export const searchButtonStyle = {
  backgroundColor: "black",
  color: "white",
  px: 4,
  "&:hover": {
    backgroundColor: "#333",
  },
};

export const filterButtonStyle = {
  px: 2,
  backgroundColor: "white",
  color: "#333",
  border: "none",
  "&:hover": {
    backgroundColor: "#333",
    color: "white",
  },
};
