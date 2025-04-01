import { View, Pressable, Image } from "react-native";
import "./global.css";

import Clipboard from '@react-native-clipboard/clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

// Import the SVG as an Image source
import CopyIcon from '../assets/images/copy.png';

interface CodeBlockProps {
  code: string;
  language?: string; // Optional with default fallback
}

export default function CodeBlock({ code, language = "javascript" }: CodeBlockProps) {
  return (
    <View className="relative m-2 max-w-md w-full mx-auto">
      {/* Copy Button in upper-right */}
      <Pressable
        onPress={() => Clipboard.setString(code)}
        className="absolute top-2 right-2 z-10 p-2 rounded-full active:bg-white/10 active:scale-105 md:hover:scale-105 transition"
      >
        <Image
          source={CopyIcon}
          className="w-5 h-5 opacity-80"
          resizeMode="contain"
        />
      </Pressable>

      <SyntaxHighlighter
        language={language}
        style={atomOneDark}
        className="rounded-lg p-4 pt-10"
      >
        {code}
      </SyntaxHighlighter>
    </View>
  );
}
