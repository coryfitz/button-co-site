import { Text, View} from "react-native";
import "./global.css";
import Header from "./header"

export default function About() {
  return (
    <View className="flex-1">
      <Header />

      {/* Main Content */}
      <View className="flex-1 justify-center items-center">
        <Text>Information about The Button Company</Text>
      </View>
    </View>
  );
}