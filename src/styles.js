import { StyleSheet } from 'react-sketchapp';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 1050,
    height: 600,
    borderWidth: 0,
    borderRadius: 0,
    overflowY: 'scroll',
    backgroundColor: '#90D26D',
  },

  title: {
    fontFamily: 'Helvetica',
    fontSize: 52,
    lineHeight: 52,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 12
  },

  text: {
    fontFamily: 'Helvetica',
    fontSize: 40,
    lineHeight: 40,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'normal',
  },
});

export default styles;
