
export const slideContentStyle = (image) => ({
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${image})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  position: 'relative',
  color: '#fff',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 0,
  },
});

export const slideInnerContentStyle = {
  zIndex: 1,
  px: 2,
};

export const slideButtonStyle = {
  mt: 2,
  backgroundColor: '#1F1F1F',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#333',
  },
};
