import React from 'react';
import {View, Modal, ActivityIndicator, StyleSheet, Text} from 'react-native';

const Loader = ({loading, text}) => (
  <Modal
    transparent
    animationType="none"
    visible={loading}
    onRequestClose={() => null}>
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator size="large" color="black" />
        <Text style={styles.titleStyle}>{text}</Text>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust opacity as needed
  },
  activityIndicatorWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    alignSelf: 'center',
    marginVertical: 5,
    fontSize: 14,
    fontWeight: '800',
  },
});

export default Loader;
