// ProjectCardStyles.js

const styles = {
  container: {
    width: "100%",
  },
  card: (image) => ({
    position: "relative",
    height: 250,
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    borderRadius: 3,
    overflow: "hidden",
  }),
  overlay: {
    p: 2,
    bgcolor: "rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mb: 0.5,
  },
  favoriteButton: {
    color: "white",
  },
  description: {
    fontSize: 12,
    direction: "rtl",
  },
};

export default styles;
