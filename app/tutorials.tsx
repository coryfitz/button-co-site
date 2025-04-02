import { Text, View, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import "./global.css";
import Header from "./header";
import CodeBlock from "./codeBlock";

// Tab Button Component
const TabButton = ({ title, active, onPress }) => (
  <Pressable
    onPress={onPress}
    className={`px-4 py-2 rounded-t-lg ${
      active ? "bg-green-800" : "bg-green-600"
    }`}
  >
    <Text className="text-white font-semibold">{title}</Text>
  </Pressable>
);

// Tabs Component
const Tabs = ({ currentTab, setCurrentTab }) => (
  <View className="flex-row mb-4">
    <TabButton
      title="Python"
      active={currentTab === "python"}
      onPress={() => setCurrentTab("python")}
    />
    <TabButton
      title="Rust"
      active={currentTab === "rust"}
      onPress={() => setCurrentTab("rust")}
    />
  </View>
);

export default function Tutorials() {
  const [tab1, setTab1] = useState("python");
  const [tab2, setTab2] = useState("python");
  const [tab3, setTab3] = useState("python");

  const sampleCode = `
  const greet = (name) => {
    return \`Hello, \${name}!\`;
  };

  console.log(greet('world'));
  `;

  return (
    <View className="flex-1 bg-green-950">
      <Header />
      <ScrollView className="flex-1 px-4 py-6">

        {/* Card 1 */}
        <View className="bg-white rounded-2xl p-4 mb-6 shadow-md">
          <Text className="text-center text-2xl font-bold text-black mb-2">
            Getting Started with React Native
          </Text>
          <Tabs currentTab={tab1} setCurrentTab={setTab1} />
          {tab1 === "python" ? (
            <>
              <Text className="text-black text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </Text>
              <CodeBlock code={sampleCode} language="javascript" />
            </>
          ) : (
            <Text className="text-black italic">Rust version coming soon...</Text>
          )}
        </View>

        {/* Card 2 */}
        <View className="bg-white rounded-2xl p-4 mb-6 shadow-md">
          <Text className="text-center text-2xl font-bold text-black mb-2">
            Understanding Components
          </Text>
          <Tabs currentTab={tab2} setCurrentTab={setTab2} />
          {tab2 === "python" ? (
            <>
              <Text className="text-black text-base leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </Text>
              <CodeBlock code={`print("Hello!")`} language="python" />
            </>
          ) : (
            <Text className="text-black italic">Rust version coming soon...</Text>
          )}
        </View>

        {/* Card 3 */}
        <View className="bg-white rounded-2xl p-4 mb-6 shadow-md">
          <Text className="text-center text-2xl font-bold text-black mb-2">
            Styling with Tailwind CSS
          </Text>
          <Tabs currentTab={tab3} setCurrentTab={setTab3} />
          {tab3 === "python" ? (
            <Text className="text-black text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit...
            </Text>
          ) : (
            <Text className="text-black italic">Rust version coming soon...</Text>
          )}
        </View>

      </ScrollView>
    </View>
  );
}
