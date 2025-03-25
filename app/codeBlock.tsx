import { View, Button } from "react-native";
import "./global.css";

import Clipboard from '@react-native-clipboard/clipboard';
import SyntaxHighlighter from 'react-native-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/styles/hljs';

export default function CodeBlock({ code }: { code: string }) {

  return (
    <View style={{ margin: 10 }}>
      <SyntaxHighlighter language="javascript" style={atomOneDark}>
        {code}
      </SyntaxHighlighter>
      <Button title="Copy" onPress={() => Clipboard.setString(code)} />
    </View>
  );
};