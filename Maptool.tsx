import React, { useEffect, useRef, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SvgImgPath } from '../assets/images';
import { Layout } from '../assets/theme/Layout';

interface MapTool_PropTypes {
  zoomEnabled: boolean;
  initialRegion: any;
  markerImage: any;
  markerPosition: any;
  selectLocationOnTapOrDrag: any;
}

const MapTool: React.FC<MapTool_PropTypes> = ({
  zoomEnabled,
  initialRegion,
  markerImage,
  markerPosition,
  selectLocationOnTapOrDrag,
}) => {
  const mapRef = useRef<MapView | null>(null);

  const [markerPosition1, setMarkerPosition1] = useState({ ...markerPosition });

  useEffect(() => {
    recenterMap();
  }, [markerPosition]);

  const recenterMap = () => {
    if (mapRef.current) {
      console.log("initialRegion",initialRegion);
      
      mapRef.current.animateToRegion(initialRegion, 1000);
      setMarkerPosition1(initialRegion);
    }
  };

  return (
    <View testID="map-view-container" style={styles.mapWrapper}>
      <MapView
        ref={mapRef}
        style={styles.map}
        zoomEnabled={zoomEnabled}
        initialRegion={initialRegion}
        onPress={selectLocationOnTapOrDrag}
        >
        <Marker
          testID={'map-view-marker'}
          draggable={true}
          coordinate={markerPosition1}
          onDragEnd={selectLocationOnTapOrDrag}
          title="Baleno">
          <Image
            testID="map-view-marker-image"
            source={markerImage}
            style={styles.carMarker}
          />
        </Marker>
      </MapView>
      <TouchableOpacity
        testID="recenter-button"
        onPress={recenterMap}
        style={styles.recenterBtn}>
        <SvgImgPath.FocusIcon width={30} height={30} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mapWrapper: { flex: 1, position: 'relative' },
  map: {
    flex: 1,
  },
  recenterBtn: {
    width: 44, // width of the circle
    height: 44, // height of the circle
    borderRadius: Layout.dimensions.margin_20, // half of width/height
    backgroundColor: '#F3F9FF', // color of the circle
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: Layout.dimensions.margin_20,
    right: Layout.dimensions.margin_20,
  },
  carMarker: {
    height: Layout.dimensions.margin_50,
    width: Layout.dimensions.margin_50,
  },
});
export default MapTool;
