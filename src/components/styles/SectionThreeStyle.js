const SectionThreeStyles = {
  root: {
    flexGrow: 1,
  },

  gridContainer: {
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    gap: 5,
  },

  textSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: { xs: "center", md: "flex-start" },
    padding: { xs: "30px", md: "0 50px" },
    textAlign: { xs: "center", md: "right" },
    direction: "rtl",
    width: { xs: "auto", md: "40%", lg: "45%" },
  },

  heading: {
    lineHeight: 3,
    fontWeight: "bold",
    fontSize: { xs: "18px", md: "20px", lg: "20px" },
  },

  paragraph: {
    color: "#545454",
    width: "90%",
  },

  subtitle: {
    lineHeight: 3,
  },

  button: {
    mt: 2,
    backgroundColor: "#1F1F1F",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#333",
    },
  },

  imageSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: { xs: "auto", md: "40%", lg: "45%" },
  },

  image: {
    width: "90%",
    maxWidth: "500px",
    height: "100%",
    objectFit: "cover",
  },
};
export default SectionThreeStyles;
