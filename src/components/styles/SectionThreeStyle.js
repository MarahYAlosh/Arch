const SectionThreeStyles = {
  root: {
    flexGrow: 1,
  },

  gridContainer: {
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    gap: 5,
    flexWrap: "wrap",
  },

  textSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: { xs: "center", md: "flex-start" },
    padding: { xs: "30px", md: "0 50px" },
    textAlign: { xs: "center", md: "right" },
    direction: "rtl",
    width: { xs: "100%", md: "40%", lg: "45%" },
  },

  heading: {
    lineHeight: 3,
    fontWeight: 700,
    fontSize: { xs: "18px", md: "20px", lg: "23px" },
  },

  paragraph: {
    color: "#545454",
    width: "90%",
    lineHeight: { xs: 1.4, md: 2, lg: 2.1 },
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
    width: { xs: "80%", md: "40%", lg: "45%" },
  },

  image: {
    width: "90%",
    maxWidth: "100%",
    height: "100%",
    objectFit: "cover",
  },
};
export default SectionThreeStyles;
