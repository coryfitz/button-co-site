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
  const [tab2, setTab2] = useState("MicroPython");
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
            Using ESPHome to Connect to Home Assistant
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
          Using umqtt to Connect to Home Assistant
          </Text>
          <Tabs currentTab={tab2} setCurrentTab={setTab2} tabs={["MicroPython"]}/>
          {
          tab2 === "MicroPython" ? (
            <>
              <Text className="text-black text-base leading-relaxed">

              Requirements: Home Assistant on a Raspberry Pi or other device
              <br></br>
              (instructions to install Home Assistant on a Raspberry Pi: https://www.home-assistant.io/installation/raspberrypi/)
              <br></br>
              <br></br>
              1. Install MQTT on your Home Assistant if you don't have it: https://www.home-assistant.io/integrations/mqtt/
              <br></br>
              Manually enter the MQTT Broker connection details
              <br></br>
              <br></br>
              Click on your name in the bottom left of Home Assistant
              Toggle on advanced mode
              Then, Settings - People - Users
              2. Install MicroPython by following instructions here: https://www.raspberrypi.com/documentation/microcontrollers/micropython.html
              <br></br>
              (The Button uses a Pico W board, not a Pico 2 or Pico 2 W)
              <br></br>
              <br></br>
              3. In the Thonny code editor, in the bottom right, select "MicroPython (Raspberry Pi Pico)"
              <br></br>
              <br></br>
              4. Use Thonny to enter the following MicroPython code
              <br></br>
              WIFI_SSID and WIFI_PASSWORD are your wifi network's name and password
              <br></br>
              If you don't already have your Home Assistant's IP Address, you can add the following integration: https://www.home-assistant.io/integrations/local_ip/
              <br></br>

              </Text>
              <CodeBlock code={`
import network
import time
import json
import mip
from machine import Pin, ADC

# WiFi credentials
WIFI_SSID = "Your_SSID"
WIFI_PASSWORD = "Your_Password"

# MQTT settings
MQTT_BROKER = "10.0.1.9"  # Your Home Assistant IP
MQTT_PORT = 1883
MQTT_CLIENT_ID = "pico_sensor"
MQTT_USER = "mqtt-user"  # If authentication is enabled
MQTT_PASSWORD = "Your_Password"

# Connect to WiFi
def connect_wifi():
    wlan = network.WLAN(network.STA_IF)
    wlan.active(True)
    wlan.connect(WIFI_SSID, WIFI_PASSWORD)
    
    while not wlan.isconnected():
        print("Connecting to WiFi...")
        time.sleep(1)
    
    print(f"Connected to WiFi: {wlan.ifconfig()}")

# MQTT connection
def connect_mqtt():
    mip.install('umqtt.simple')
    from umqtt.simple import MQTTClient
    client = MQTTClient(MQTT_CLIENT_ID, MQTT_BROKER, MQTT_PORT, MQTT_USER, MQTT_PASSWORD)
    client.connect()
    print("Connected to MQTT broker")
    return client

from machine import Pin
import time

# Add these topic definitions at the top with your other constants
TOPIC_BUTTON = "homeassistant/binary_sensor/pico/button/state"
TOPIC_CONFIG = "homeassistant/binary_sensor/pico_button/config"

# Update the discovery config function
def publish_discovery_config(client):
    config = {
        "name": "Pico Button",
        "state_topic": TOPIC_BUTTON,
        "payload_on": "ON",
        "payload_off": "OFF",
        "unique_id": "pico_button_01",
        "device": {
            "identifiers": ["pico_sensor_01"],
            "name": "Raspberry Pi Pico Sensor",
            "model": "Pico",
            "manufacturer": "Raspberry Pi Foundation"
        }
    }
    client.publish(TOPIC_CONFIG, json.dumps(config), retain=True)
    print("Published button discovery config")

def main():
    connect_wifi()
    
    client = connect_mqtt()
    
    publish_discovery_config(client)
    
    button = Pin(0, Pin.IN, Pin.PULL_UP)
    last_button_state = button.value()
    
    toggle_state = False
    
    while True:
        try:
            current_button_state = button.value()
            
            if last_button_state == 1 and current_button_state == 0:
                print("Button pressed!")
                
            elif last_button_state == 0 and current_button_state == 1:
                print("Button released!")
                
                toggle_state = not toggle_state
                
                if toggle_state:
                    button_status = "ON"
                    print("Toggle state: ON")
                else:
                    button_status = "OFF"
                    print("Toggle state: OFF")
                
                client.publish(TOPIC_BUTTON, button_status)
                print(f"Published button state: {button_status}")
            
            last_button_state = current_button_state
            time.sleep(0.1)  # Check every 100ms for responsiveness
            
        except Exception as e:
            print(f"Error: {e}")
            time.sleep(1)

if __name__ == "__main__":
    main()

                `} language="python" />
                <Text>
                  5. Test the code by running it from Thonny; your Pico should connect to your Home Assistant.
                  <br></br>
                  <br></br>
                  6. When it's working properly, save it as main.py
                </Text>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
            <CodeBlock code={pythonCode} language="python" />
          </>
        ) : (
          <>
            <Text className="text-black text-base leading-relaxed">
            Error
            </Text>
            <CodeBlock code={rustCode} language="rust" />
          </>
          )}
        </View>

      </ScrollView>
    </View>
  );
}
