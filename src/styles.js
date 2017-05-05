import { StyleSheet } from 'react-sketchapp';

const w = 1050;
const h = 600;

const styles = StyleSheet.create({
  artboard: {
    // flexDirection: 'column',
    // flex: 1,
    width: w,
    height: h * 2,
    backgroundColor: 'whitesmoke',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // flexDirection: 'column',
    width: w,
    height: h,
    overflowY: 'hidden',
    backgroundColor: '#90D26D',
    borderWidth: 2,
    borderRadius: 24,
    borderColor: 'whitesmoke',
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

  containerBack: {
    // flex: 1,
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'left',
    width: w,
    height: h,
    overflowY: 'hidden',
    backgroundColor: 'gray',
    borderWidth: 2,
    borderRadius: 24,
    borderColor: 'gray',
    padding: 48
  },

  titleBack: {
    fontFamily: 'Helvetica',
    fontSize: 52,
    lineHeight: 52,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
    marginBottom: 12
  },

  textBack: {
    fontFamily: 'Helvetica',
    fontSize: 40,
    lineHeight: 50,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'normal',
  },
});

export default styles;
