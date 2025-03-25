import { Text, View, ScrollView } from "react-native";
import "./global.css";
import Header from "./header";
import CodeBlock from "./codeBlock";

export default function Tutorials() {

  const sampleCode = `
  const greet = (name) => {
    return \`Hello, \${name}!\`;
  };

  console.log(greet('world'));
  `;

  return (
    <View className="flex-1 bg-green-950">
      <Header />

      {/* Main Content */}
      <ScrollView className="flex-1 px-4 py-6">
        {/* Blog Post Card */}
        <View className="bg-white rounded-2xl p-4 mb-6 shadow-md">
          <Text className="text-center text-2xl font-bold text-black mb-2">Getting Started with React Native</Text>
          <Text className="text-black text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel felis eget justo consequat tincidunt. 
            Maecenas nec massa vitae turpis imperdiet imperdiet. Proin dapibus nisi at turpis sagittis, vel ultrices velit tincidunt. 
            Vivamus nec leo nec lectus sodales mattis. Cras eu erat eu purus malesuada tincidunt.
          </Text>
          <CodeBlock code={sampleCode} />
        </View>

        <View className="bg-white rounded-2xl p-4 mb-6 shadow-md">
          <Text className="text-center text-2xl font-bold text-black mb-2">Understanding Components</Text>
          <Text className="text-black text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod lorem vitae neque convallis, at laoreet justo dapibus. 
            Integer vel enim vitae elit facilisis ullamcorper. Suspendisse nec metus nec lorem sagittis finibus.
          </Text>
        </View>

        <View className="bg-white rounded-2xl p-4 mb-6 shadow-md">
          <Text className="text-center text-2xl font-bold text-black mb-2">Styling with Tailwind CSS</Text>
          <Text className="text-black text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit lorem in eros cursus fermentum. 
            Duis et nisi vitae orci malesuada luctus a vel orci. Fusce eget tincidunt diam.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
