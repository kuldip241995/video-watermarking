/* eslint-disable no-shadow */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  FlatList,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';
// import NavigationService from '../../utils/NavigationService';
import {arrVideos} from './utils';
import HomeVideoListItem from './HomeVideoListItem';
import VideoModal from './VideoModal';
import NavigationService from '../../utils/NavigationService';

const HomeScreen = ({props, navigation, route}) => {
  const [isShowModal, setShowModal] = useState(false);
  const [selectedVideoItem, setSelectedVideoItem] = useState('');

  const renderHomeVideoListItem = ({item, index}) => (
    <HomeVideoListItem
      item={item}
      index={index}
      onPressItem={item => {
        setShowModal(true);
        setSelectedVideoItem(item);
      }}
    />
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.titleStyle}>Videos List</Text>
          <TouchableOpacity
            onPress={() => {
              NavigationService.navigate(navigation, 'VideoWaterMarkingScreen');
            }}
            activeOpacity={0.5}
            style={styles.waterMarkingContainerStyle}>
            <Text style={styles.waterMarkingTextStyle}>Video WaterMarking</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.flatListStyle}
          showsVerticalScrollIndicator={false}
          data={arrVideos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderHomeVideoListItem}
        />
      </SafeAreaView>
      {isShowModal && (
        <VideoModal
          isVisible={isShowModal}
          videoItem={selectedVideoItem}
          closeModal={() => {
            setShowModal(false);
          }}
        />
      )}
    </View>
  );
};

export default HomeScreen;
