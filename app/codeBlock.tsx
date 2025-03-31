import { View, Pressable, Image } from "react-native";
import "./global.css";

import Clipboard from '@react-native-clipboard/clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

// Import the SVG as an Image source
import CopyIcon from '../assets/images/copy.png';

export default function CodeBlock({ code }: { code: string }) {
  return (
    <View className="relative m-2 max-w-md w-full mx-auto ">
      {/* Copy Button in upper-right */}
      <Pressable
        onPress={() => Clipboard.setString(code)}
        className="absolute top-2 right-2 z-10 p-2 rounded-full active:bg-white/10 transition"
      >
        <Image
          source={CopyIcon}
          className="w-5 h-5 opacity-80"
          resizeMode="contain"
        />
      </Pressable>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        className="rounded-lg p-4 pt-10"
      >
        {code}
      </SyntaxHighlighter>
    </View>
  );
}

