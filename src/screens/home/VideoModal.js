import React, {useState} from 'react';
import {
  Modal,
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import Video from 'react-native-video';
import icons from '../../assets/icons';

export default React.memo(props => {
  const [isPreloading, setIsPreloading] = useState(true);
  const {height, width} = useWindowDimensions();
  const styles = _styles(height, width);
  console.log('videoURL ::', props.videoItem);

  const handleBuffer = meta => {
    setIsPreloading(meta.isBuffering);
  };

  const handleLoad = () => {
    setIsPreloading(false);
  };

  return (
    <Modal visible={props.isVisible} transparent={true} animationType={'none'}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          {isPreloading && (
            <ActivityIndicator
              animating
              color={'gray'}
              size="large"
              style={{flex: 1, position: 'absolute', top: '50%', left: '45%'}}
            />
          )}
          <Video
            source={{
              uri: props.videoItem?.sources,
            }}
            resizeMode="contain"
            style={styles.backgroundVideo}
            onBuffer={handleBuffer} // Callback when remote video is buffering
            onLoad={handleLoad} // Callback when video loads
          />
          {!isPreloading && (
            <View style={styles.waterMarkOverlayContainerStyle}>
              <Image
                source={props.videoItem?.waterMarkImage}
                style={styles.watermarkImageStyle}
              />
              <Text style={styles.watermarkTitleStyle}>
                {/* {props.videoItem?.waterMarkText} */}
                {'CONFIDENTIAL : Your Recording Under observation'.toUpperCase()}
              </Text>
            </View>
          )}
        </View>
      </View>
      <TouchableOpacity
        hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}
        style={styles.closeIconContainerStyle}
        onPress={props.closeModal}>
        <Image
          style={{height: 24, width: 24, tintColor: 'white'}}
          source={icons.icClose}
        />
      </TouchableOpacity>
    </Modal>
  );
});

export const _styles = (height, width) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      opacity: 1,
    },
    modalView: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      top: 0,
      height: height,
    },
    backgroundVideo: {
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      height: height,
      width: width,
      resizeMode: 'contain',
    },
    closeIconContainerStyle: {
      position: 'absolute',
      height: 40,
      width: 40,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'flex-end',
      marginTop: 30,
      right: 16,
    },
    waterMarkOverlayContainerStyle: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.4,
      height: '100%',
      width: '100%',
      marginTop: '-18%',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    watermarkImageStyle: {
      height: 50,
      width: 50,
      borderRadius: 10,
    },
    watermarkTitleStyle: {
      alignSelf: 'center',
      marginVertical: 5,
      fontSize: 10,
      fontWeight: '800',
      color: 'white',
    },
  });
