import { Text, View, ScrollView, Pressable } from "react-native";
import { useState } from "react";
import "./global.css";
import Header from "./header";
import CodeBlock from "./codeBlock";

// Tab Button Component
function TabButton ({ title, active, onPress }) {
  return (
    <Pressable
      onPress={onPress}
      className={`px-4 py-2 rounded-t-lg ${
        active ? "bg-green-800" : "bg-green-600"
      }`}
    >
      <Text className="text-white font-semibold">{title}</Text>
    </Pressable>
  );
}

// Tabs Component
function Tabs({ currentTab, setCurrentTab, tabs }) {
  return (
    <View className="flex-row mb-4">
      {tabs.map(function (tabName) {
        return (
          <TabButton
            key={tabName.toLowerCase()}
            title={tabName}
            active={currentTab === tabName.toLowerCase()}
            onPress={function () {
              setCurrentTab(tabName);
            }}
          />
        );
      })}
    </View>
  );
}

export default function Tutorials() {
  const [tab1, setTab1] = useState("YAML");
  const [tab2, setTab2] = useState("Python");
  const [tab3, setTab3] = useState("Python");

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
          <Tabs currentTab={tab1} setCurrentTab={setTab1} tabs={["YAML"]}/>
          {tab1 === "YAML" ? (
            <>
              <Text className="text-black text-base leading-relaxed">
                Requirements: Home Assistant on a Raspberry Pi or other device
                <br></br>
                (instructions to install Home Assistant on a Raspberry Pi: https://www.home-assistant.io/installation/raspberrypi/)
                <br></br>
                <br></br>
                We will use ESPHome to connect to The Button. ESPHome is a Home Assistant addon that lets us use a YAML file to connect a device to Home Assistant.
                <br></br>
                <br></br>
                1. Set up ESPHome on your Home Assistant
                <br></br>
                <br></br>
                Click the button on this page: https://esphome.io/guides/getting_started_hassio
                <br></br>
                <br></br>
                Then click the install button on your Home Assistant screen
                <br></br>
                <br></br>
                After it has installed, toggle on "Show in sidebar"
                <br></br>
                <br></br>
                Click on ESPHome Builder in the sidebar and press Start Addon
                <br></br>
                <br></br>
                2. Connect your Button to ESPHome
                <br></br>
                <br></br>
                Go to https://web.esphome.io/?pico and click on "First Time Setup"
                <br></br>
                <br></br>
                Follow the instructions to load the ESPHome file onto your Pico
                <br></br>
                <br></br>
                Do not click Continue - return to your Home Assistant screen - ESPHome Builder
                <br></br>
                <br></br>
                Click Add Device - Open ESPHome Web
                <br></br>
                <br></br>
                Click Connect
                <br></br>
                <br></br>
                Return to ESPHome Builder in your Home Assistant, you should see "Discovered 1 device"
                <br></br>
                <br></br>
                Reload if it isn't there yet
                <br></br>
                <br></br>
                Click Show and then Take Control, then Take Control again
                <br></br>
                <br></br>
                Skip installing configuration on the device, click Close
                <br></br>
                <br></br>
                Click Edit on the entry for your device
                <br></br>
                <br></br>
                Enter the following YAML config - click save then exit
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
              </Text>

              <CodeBlock code={
                `
esphome:
  name: esphome-web-9c0378
  friendly_name: Button 1
  min_version: 2024.11.0
  name_add_mac_suffix: false

rp2040:
  board: rpipicow

# Enable logging
logger:

# Enable Home Assistant APIß
api:

# Allow Over-The-Air updates
ota:
- platform: esphome

wifi:
  ssid: !secret wifi_ssid
  password: !secret wifi_password

binary_sensor:
  - platform: gpio
    pin:
      # GPIO pin connected to the button
      number: 0
      # Use the internal pull-down resistor
      mode: INPUT_PULLDOWN
    name: "Push Button"
    id: push_button
                `
              } language="yaml" />
            
<Text>
<br></br>
<br></br>
Click the three dots and validate to ensure there are no issues with the config
<br></br>
<br></br>
Click Install
<br></br>
<br></br>
Select Manual Download
<br></br>
<br></br>
When the file is ready, click Download project
<br></br>
<br></br>
Select UF2 factory format
<br></br>
<br></br>
Bootsel - upload the file
<br></br>
<br></br>
Unplug the device from your computer and plug it into a power outlet so that we can ensure it's connecting via wifi
<br></br>
<br></br>
Home Assistant - Settings - Devices and Services
<br></br>
<br></br>
You should see the device under "Discovered" - click Add - Submit - (optional: add to area) - Finish
<br></br>
<br></br>
Find the device in your Home Assistant overview (click on the side panel)
<br></br>
<br></br>
Check that the binary sensor toggles from off to on when the button is pressed
<br></br>
<br></br>
<br></br>
<br></br>

</Text>
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
          <Tabs currentTab={tab2} setCurrentTab={setTab2} tabs={["Python", "Rust", "YAML"]}/>
          {
          tab2 === "Python" ? (
            <>
              <Text className="text-black text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <CodeBlock code={pythonCode} language="python" />
            </>
          ) : tab2 === "Rust" ? (
            <>
              <Text className="text-black text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <CodeBlock code={rustCode} language="rust" />
            </>
          ) 
          : tab2 === "YAML" ? (
            <>
              <Text className="text-black text-base leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Text>
              <CodeBlock code={
                `binary_sensor:
                  - platform: gpio
                    pin:
                      number: 0  # GPIO pin connected to the button
                      mode: INPUT_PULLDOWN  # Use the internal pull-down resistor
                    name: "Push Button"
                    id: push_button
                    on_press:
                      - homeassistant.event:
                          event: esphome.push_button_pressed
                    on_release:
                      - homeassistant.event:
                          event: esphome.push_button_released
                `
              } language="yaml" />
            </>
          ): (
            // Optional fallback if none match
            <Text className="text-black">Select a tab.</Text>
          )}
        </View>

        {/* Card 3 */}
        <View className="bg-white rounded-2xl p-4 mb-6 shadow-md">
          <Text className="text-center text-2xl font-bold text-black mb-2">
            Styling with Tailwind CSS
          </Text>
          <Tabs currentTab={tab3} setCurrentTab={setTab3} tabs={["Python", "Rust"]}/>
          {tab3 === "Python" ? (
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
