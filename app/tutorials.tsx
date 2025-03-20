import { Text, View} from "react-native";
import "./global.css";
import Header from "./header"

export default function Tutorials() {
  return (
    <View className="flex-1 bg-green-950">
      <Header />

      {/* Main Content */}
      <View className="flex-1 justify-center items-center">
        <Text className="text-white">Here are some tutorials</Text>
      </View>
    </View>
  );
}