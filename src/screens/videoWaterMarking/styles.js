import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleStyle: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '800',
    marginHorizontal: 8,
    flex: 1,
  },
  chooseVideoContainerStyle: {
    height: 45,
    backgroundColor: 'lightgray',
    marginHorizontal: 20,
    marginTop: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chooseVideoTextStyle: {
    fontSize: 14,
    fontWeight: '500',
  },
  textInputStyle: {
    height: 45,
    backgroundColor: 'lightgray',
    marginHorizontal: 20,
    borderRadius: 8,
    padding: 16,
    color: 'black',
  },
});

export default styles;
