import { Text, View } from "react-native";
import { Link } from "expo-router";
import "./global.css";

export default function Header() {
  return (
    <View className="bg-white">
      {/* Header */}
      <View className="w-full py-4 px-6 bg-blue-600 flex-row justify-between items-center">
        {/* Title on the left */}
        <Link href="/">
            <Text className="text-white text-2xl font-bold">The Button Company</Text>
        </Link>

        {/* Navigation Links on the right */}
        <View className="flex-row space-x-4">
          <Link href="/about">
            <Text className="text-white text-lg">About</Text>
          </Link>
          <Link href="/tutorials">
            <Text className="text-white text-lg">Tutorials</Text>
          </Link>
        </View>
      </View>
      </View>
  );
}