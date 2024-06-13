import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import icons from '../../assets/icons';

const HomeVideoListItem = React.memo(({item, index, onPressItem}) => {
  const {colors} = useTheme();
  const styles = _styles(colors);
  return (
    <View key={item} style={styles.listContainerStyle}>
      <FastImage
        style={styles.backgroundImageStyle}
        source={{
          uri: item.thumb,
        }}
        resizeMode={FastImage.resizeMode.cover}>
        <View style={styles.bottomContentStyle}>
          <Text style={styles.listTitleTextStyle}>{item.title}</Text>
          <Text style={styles.listDescriptionTextStyle} numberOfLines={2}>
            {item.description}
          </Text>
        </View>
      </FastImage>

      <Pressable
        style={styles.playIconContainerStyle}
        onPress={() => onPressItem(item)}>
        <Image source={icons.icPlayVideo} />
      </Pressable>
    </View>
  );
});

//

const _styles = colors =>
  StyleSheet.create({
    listContainerStyle: {
      marginHorizontal: 20,
      height: 300,
      marginVertical: 5,
    },
    backgroundImageStyle: {
      height: '100%',
      width: '100%',
      borderRadius: 10,
    },
    bottomContentStyle: {
      backgroundColor: 'black',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderTopLeftRadius: 4,
      borderTopRightRadius: 4,
    },
    listTitleTextStyle: {
      flex: 1,
      fontSize: 14,
      color: 'white',
      marginHorizontal: 8,
      marginTop: 10,
      fontWeight: '900',
    },
    listDescriptionTextStyle: {
      flex: 1,
      fontSize: 12,
      color: 'white',
      marginHorizontal: 8,
      marginTop: 5,
      marginBottom: 10,
      fontWeight: '400',
    },
    playIconContainerStyle: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },
  });

export default HomeVideoListItem;
