import { Text, View } from "react-native";
import "./global.css";
import Header from "./header"

export default function Index() {
  return (
    <View className="flex-1">
      <Header />

      {/* Main Content */}
      <View className="flex-1 justify-center items-center">
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </View>
  );
}

