import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Index() {
  const [name, setName] = useState("");
  const [namesList, setNamesList] = useState<string[]>([]);

  function handleInputChange(enteredText: string): void {
    setName(enteredText);
  }
  function handleAddName(): void {
    console.log("Adding:", name);

    if (!name.trim()) return;

    setNamesList((prevNames) => [...prevNames, name]);
    setName("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>
      <Text style={styles.subtitle}>Start building your app</Text>
      <StatusBar style="light" />
      <View style={styles.formInput}>
        <TextInput
          placeholder="Enter your name"
          style={styles.input}
          value={name}
          onChangeText={handleInputChange}
        />
        <Button title="Add Name" onPress={handleAddName} />
      </View>

      <Text style={{ marginTop: 20, color: "#3f3f3f" }}>List of Names... </Text>
      <View style={{ marginTop: 10 }}>
        <ScrollView alwaysBounceVertical={false}>
          {namesList.map((item, index) => (
            <View
              key={index}
              style={{
                padding: 10,
                backgroundColor: "#4CAF50",
                marginBottom: 5,
              }}
            >
              <Text style={{ color: "#fff" }}>{item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e9e1e1",
  },
  formInput: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#ddd",
    marginBottom: 16,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor: "#fff",
  },
});
