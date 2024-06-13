/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import styles from './styles';
import icons from '../../assets/icons';
import NavigationService from '../../utils/NavigationService';
import {launchImageLibrary} from 'react-native-image-picker';
import {FFmpegKit, ReturnCode} from 'ffmpeg-kit-react-native';
import VideoModal from '../home/VideoModal';
import RNFS from 'react-native-fs';
import Loader from './Loader';

const VideoWaterMarkingScreen = ({props, navigation, route}) => {
  const [watermarkImage, setWatermarkImageURI] = useState('');
  const [outputFile, setOutputFile] = useState('');
  const [isShowModal, setShowModal] = useState(false);
  const [watermarkText, setWatermarkText] = useState('HOTSTAR');
  const [loading, setLoading] = useState(false);

  const selectImage = () => {
    launchImageLibrary(
      {
        title: 'Select video',
        mediaType: 'image',
        path: 'image',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = response.assets[0].uri;
          setWatermarkImageURI(source);
        }
      },
    );
  };

  const selectVideo = () => {
    launchImageLibrary(
      {
        title: 'Select video',
        mediaType: 'video',
        path: 'video',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          const source = response.assets[0].uri;
          addWatermarkImage(source);
        }
      },
    );
  };

  //Working code with image
  const addWatermarkImage = async videoUri => {
    setLoading(true);
    const outputVideoUri = `${
      RNFS.CachesDirectoryPath
    }/output_${Date.now()}.mp4`;

    //WaterMark Image Command
    // const ffmpegCommand = `-i ${videoUri} -i ${watermarkImage} -filter_complex "[1:v]scale=${150}:${150}[wm];[0:v][wm]overlay=10:10" -codec:a copy ${outputVideoUri}`;

    //WaterMark Text command
    // const ffmpegCommand = `-i ${videoUri} -vf "drawtext=text='Stack Overflow':fontcolor=red:fontsize=24:box=1:boxcolor=black@0.5:boxborderw=5:x=(w-text_w)/2:y=(h-text_h)/2" -codec:a copy ${outputVideoUri}`;

    //WaterMark Image + Text Combine Command
    // const ffmpegCommand = `-i ${videoUri} -i ${watermarkImage} -filter_complex "[1:v]scale=150:150[wm];[0:v][wm]overlay=W-w-10:H-h-10,drawtext=text='Your Text':fontcolor=white:fontsize=24:x=10:y=10" ${outputVideoUri}`;
    const ffmpegCommand = `-i ${videoUri} -i ${watermarkImage} -filter_complex "[1:v]scale=150:150[wm];[0:v][wm]overlay=10:10,drawtext=text=${watermarkText}:fontcolor=orange:fontsize=24:x=20:y=180" ${outputVideoUri}`;
    console.log('addWatermarkImage :: ffmpegCommand ::', ffmpegCommand);
    try {
      const session = await FFmpegKit.execute(ffmpegCommand);
      const returnCode = await session.getReturnCode();
      if (ReturnCode.isSuccess(returnCode)) {
        const output = await session.getOutput();
        console.log('output ::', output);
        setLoading(false);
        Alert.alert('Success', 'FFmpeg command executed successfully');
        setOutputFile(outputVideoUri);
      } else {
        setLoading(false);
        Alert.alert('Error', 'FFmpegKit failed with return code:' + returnCode);
      }
    } catch (error) {
      setLoading(false);
      Alert.alert('Error', 'Error executing FFmpeg command' + error);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              NavigationService.goBack(navigation);
            }}
            style={{marginLeft: 16}}>
            <Image source={icons.icBack} style={{height: 24, width: 24}} />
          </TouchableOpacity>
          <Text style={styles.titleStyle}>Videos Water Marking</Text>
        </View>

        <TextInput
          style={styles.textInputStyle}
          placeholder={'Please add watermark text'}
          onChangeText={text => setWatermarkText(text)}
          value={watermarkText}
        />
        <TouchableOpacity
          onPress={() => {
            selectImage();
          }}
          style={styles.chooseVideoContainerStyle}>
          <Text style={styles.chooseVideoTextStyle}>
            Choose Image From Library
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            selectVideo();
          }}
          style={styles.chooseVideoContainerStyle}>
          <Text style={styles.chooseVideoTextStyle}>
            Choose Video From Library
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowModal(true);
          }}
          style={[
            styles.chooseVideoContainerStyle,
            {backgroundColor: 'orange'},
          ]}>
          <Text style={styles.chooseVideoTextStyle}>Play WaterMark Video</Text>
        </TouchableOpacity>
      </SafeAreaView>
      {isShowModal && (
        <VideoModal
          isVisible={isShowModal}
          videoURL={outputFile}
          closeModal={() => {
            setShowModal(false);
          }}
        />
      )}
      {loading && <Loader loading={loading} text={'Processing...'} />}
    </View>
  );
};

export default VideoWaterMarkingScreen;
