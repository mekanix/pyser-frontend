export default function getStyles(theme, height) {
  const styles = {
    ...theme,

    root: {
      minHeight: height,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      padding: 20,
    },

    small: {
      fontSize: '25px',
      marginTop: 10,
      color: 'rgb(80, 80, 80)',
    },

    link: {
      color: 'white',
    },

    tickets: {
      height: 70,
      width: 290,
      maxWidth: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      fontSize: 36,
      link: {
        marginTop: 50,
        textDecoration: 'none',
        fontSize: 48,
      },
    },

    logo: {
      maxWidth: '100%',
    },
  }
  return styles
}
