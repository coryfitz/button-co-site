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

  const pythonCode = `
  def hello_world():
    print('Hello, world!')
  `;

  const rustCode = `
  fn say_hello() {
    println!("Hello, world!");
  }

  fn main() {
      say_hello();
  }
    `;


  return (
    <View className="flex-1 bg-green-950">
      <Header />
      <ScrollView className="flex-1 px-4 py-6">

        {/* Card 1 */}
        <View className="bg-white rounded-2xl p-4 mb-6 shadow-md">
          <Text className="text-center text-2xl font-bold text-black mb-2">
            Connecting The Button to Home Assistant
          </Text>
          <Tabs currentTab={tab1} setCurrentTab={setTab1} />
          {tab1 === "python" ? (
            <>
              <Text className="text-black text-base leading-relaxed">
                Assumption: you already have Home Assistant running on a Raspberry Pi or another device
                We will use ESPHome to connect to The Button. ESPHome is a Home Assistant addon that lets us use a YAML file to connect a device to Home Assistant.
                1. Set up ESPHome on your Home Assistant
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <CodeBlock code={pythonCode} language="python" />
            </>
          ) : (
            <>
              <Text className="text-black text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <CodeBlock code={rustCode} language="rust" />
            </>
          )}
        </View>

        {/* Card 2 */}
        <View className="bg-white rounded-2xl p-4 mb-6 shadow-md">
          <Text className="text-center text-2xl font-bold text-black mb-2">
            Connecting The Button to a smart plug
          </Text>
          <Tabs currentTab={tab2} setCurrentTab={setTab2} />
          {tab2 === "python" ? (
            <>
              <Text className="text-black text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <CodeBlock code={pythonCode} language="python" />
            </>
          ) : (
            <>
              <Text className="text-black text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <CodeBlock code={rustCode} language="rust" />
            </>
          )}
        </View>

        {/* Card 3 */}
        <View className="bg-white rounded-2xl p-4 mb-6 shadow-md">
          <Text className="text-center text-2xl font-bold text-black mb-2">
            Styling with Tailwind CSS
          </Text>
          <Tabs currentTab={tab3} setCurrentTab={setTab3} />
          {tab3 === "python" ? (
            <>
            <Text className="text-black text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <CodeBlock code={pythonCode} language="python" />
          </>
        ) : (
          <>
            <Text className="text-black text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <CodeBlock code={rustCode} language="rust" />
          </>
          )}
        </View>

      </ScrollView>
    </View>
  );
}
