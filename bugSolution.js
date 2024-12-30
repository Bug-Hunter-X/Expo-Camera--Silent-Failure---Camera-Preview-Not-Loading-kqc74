// Import necessary modules
import * as React from 'react';
import { Camera, useCameraPermissions, CameraType } from 'expo-camera';

// Functional component
export default function App() {
  // Fetch camera permissions
  const [hasPermission, setHasPermission] = React.useState(null);
  const [type, setType] = React.useState(CameraType.back);
  const { status, requestPermission } = useCameraPermissions();

  // Handle permission requests
  React.useEffect(() => {
    (async () => {
      if (status === null) {
        await requestPermission();
      } else if (status === 'denied') {
        alert('Sorry, we need camera permissions to make this work!');
      }
    })();
  }, [status, requestPermission]);

  // Render component based on permission status
  if (status === 'denied') {
    return <Text>Permission Denied</Text>;
  } else if (status === 'granted') {
    return (
      <View style={{ flex: 1 }}>
        <Camera type={type} style={{ flex: 1 }}>
          {/* Camera controls here */}
        </Camera>
      </View>
    );
  } else {
    return <Text>Loading...</Text>;
  }
}
