
export const appBarStyle = {
  background: 'white',
  boxShadow: 'none',
};

export const toolbarStyle = {
  display: 'flex',
  justifyContent: 'space-between',
};

export const languageSelectStyle = {
  color: '#333',
  '& .MuiSelect-icon': { color: '#333' },
  minWidth: 80,
  mr: 1,
};

export const navButtonStyle = (isActive) => ({
  color: isActive ? '#111' : '#545454',
  fontSize: '19px',
  textTransform: 'none',
  mx: 1,
  fontWeight: isActive ? 'bold' : 'normal',
});


export const drawerPaperStyle = {
  height: '40vh',
  backgroundColor: 'white',
  color: '#2c3e50',
  padding: 2,
};

export const drawerCloseIconStyle = {
  color: '#333',
};

export const drawerListBoxStyle = {
  display: 'flex',
  flexDirection:'column',
  justifyContent: 'center',
  gap: 3,
  flexWrap: 'wrap',
  padding: 2,
};

export const drawerButtonStyle = {
  color: '#333',
  fontSize: '1rem',
  textTransform: 'none',
};
