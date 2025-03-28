import { View, Pressable, Text } from "react-native";
import "./global.css";

import Clipboard from '@react-native-clipboard/clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

// rn syntax highlighter doesn't work with the rounded corners on RN web
// the button doesn't do anything visually when you click on it

export default function CodeBlock({ code }: { code: string }) {
  return (
    <View className="m-2 max-w-2xl w-full mx-auto">
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        className="rounded-xl bg-black p-4"
      >
        {code}
      </SyntaxHighlighter>
      <Pressable 
        className="bg-blue-600 px-4 py-2 rounded-xl mt-2 pressable:bg-blue-700 active:opacity-80"
        onPress={() => Clipboard.setString(code)}
      >
        <Text className="text-white text-center text-base font-medium">
          Copy
        </Text>
      </Pressable>
    </View>
  );
}
