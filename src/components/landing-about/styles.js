export default function getStyles(theme, resolution) {
  const fontSize = resolution.width > 600
    ? 80
    : 48
  const styles = {
    ...theme,

    root: {
      minHeight: 'calc(100vh - 100px)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 50,
    },

    title: {
      fontSize,
      color: theme.palette.primary.main,
      marginBottom: 50,
      textAlign: 'center',
      small: {
        fontSize: '25px',
        marginTop: 10,
        color: '#888',
        textAlign: 'justify',
      },
      center: {
        textAlign: 'center',
      },
    },
  }
  return styles
}
