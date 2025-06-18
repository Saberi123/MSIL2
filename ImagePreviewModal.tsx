import React, { useState, useRef } from 'react';
import { Modal, View, Image, FlatList, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import { SvgImgPath } from '../../assets/images';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import styles from './styles';

const ImagePreviewScreen = ({ images, visible, onClose, testID }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const pagerRef = useRef(null);

  const handlePageChange = (index: number) => {
    setActiveIndex(index);
  };

  const isVideo = (uri: string) => {
    // Check if the URI corresponds to a video file
    const videoExtensions = ['.mp4', '.mov', '.avi', '.mkv'];
    return videoExtensions.some(ext => uri.toLowerCase().endsWith(ext));
  };

  return (
    <Modal
      testID={testID}
      visible={visible}
      animationType="fade"
      transparent={true}>
      <View style={styles.modalContainer}>
        <View testID={'modal-header'} style={styles.headerRow}>
          <View />
          <TouchableOpacity testID={'close-button'} onPress={onClose}>
            <SvgImgPath.Close />
          </TouchableOpacity>
        </View>

        <View testID={'pager-container'} style={styles.mainMediaWrapper}>
          <PagerView
            testID={'pager-view'}
            ref={pagerRef}
            style={styles.pagerView}
            initialPage={0}
            onPageSelected={e => handlePageChange(e.nativeEvent.position)}>
            {images.map((image: any, index: any) => (
              <View key={index.toString()}>
                {isVideo(image.uri) ? (
                  <VideoPlayer
                    testID={`video-player-${index}`}
                    source={{ uri: image.uri }}
                    index={index}
                    // style={styles.mainMedia}
                    // resizeMode="contain"
                    // controls={false}
                  />
                ) : (
                  <Image
                    testID={`image-${index}`}
                    source={{ uri: image.uri }}
                    style={styles.mainImage}
                    resizeMode="contain"
                  />
                )}
              </View>
            ))}
          </PagerView>
        </View>

        <View testID={'bottom-view'} style={styles.footer}>
          <FlatList
            testID={'thumbnail-list'}
            horizontal
            data={images}
            keyExtractor={(item: any, index: any) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                testID={`thumbnail-${index}`}
                onPress={() => {
                  if (pagerRef?.current) {
                    pagerRef?.current?.setPage(index);
                  }
                }}>
                <Image
                  testID={`thumbnail-image-${index}`}
                  source={{ uri: item.uri }}
                  style={[
                    styles.thumbnail,
                    activeIndex === index && styles.selectedThumbnail,
                  ]}
                />
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.thumbnailContainer}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ImagePreviewScreen;
