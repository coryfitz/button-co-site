import { Text, View, TouchableOpacity } from "react-native";
import "./global.css";

export default function Index() {
  return (
    <View className="flex-1 bg-white">
      {/* Header */}
      <View className="w-full py-4 px-6 bg-blue-600 flex-row justify-between items-center">
        {/* Title on the left */}
        <Text className="text-white text-2xl font-bold">The Button Company</Text>

        {/* Navigation Links on the right */}
        <View className="flex-row space-x-4">
          <TouchableOpacity>
            <Text className="text-white text-lg">About</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text className="text-white text-lg">Tutorials</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Main Content */}
      <View className="flex-1 justify-center items-center">
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </View>
  );
}
