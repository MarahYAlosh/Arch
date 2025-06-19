export const AboutSectionThreeStyles = {
  root: {
    py: { xs: 6, md: 12 },
    px: { xs: 2, md: 4 },
    color: "#fff",
  },
  gridContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  imageWrapper: {
    position: "relative",
    width: {
      xs: "90%",
      sm: "80%",
      md: "100%",
      lg: "696px",
    },
    aspectRatio: "696 / 483",
    mx: "auto",
  },
  imageContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  grayImage: {
    position: "absolute",
    top: 15,
    left: 15,
    width: "80%",
    height: "80%",
    borderRadius: 2,
    objectFit: "cover",
    opacity: 0.3,
    zIndex: 1,
    mt: 2,
  },
  mainImage: {
    position: "relative",
    width: "80%",
    height: "80%",
    objectFit: "cover",
    borderRadius: 2,
    zIndex: 2,
    boxShadow: 3,
    mt: 5,
  },
  imageSection: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  textSection: {
    px: { xs: 2, md: 4 },
    direction: "rtl",
  },
  heading: {
    fontWeight: "bold",
    mb: 2,
    color: "white",
  },
  paragraph: {
    color: "white",
    lineHeight: 1.7,
  },
};
