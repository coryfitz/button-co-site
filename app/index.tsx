import { Text, View } from "react-native";

// Required for CSS to work on Expo Web.
import './stylex.css';
// Required for Fast Refresh to work on Expo Web
import '@expo/metro-runtime';

import { html } from 'react-strict-dom';

export default function Index() {
  return (
    <html.div
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <html.p>Edit app/index.tsx to edit this screen.</html.p>
    </html.div>
  );
}
