import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import "./global.css";

import buttonLogo from '../assets/images/logo-white.png';


export default function Header() {
  return (

      <View className="w-full py-4 px-6 flex-row justify-between items-center">
        {/* Title on the left */}
        <Link href="/" className="flex-row items-center space-x-2">
        <Image
          source={buttonLogo}
          style={{ width: 40, height: 40 }}
          className="relative top-3"
        />
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
  );
}