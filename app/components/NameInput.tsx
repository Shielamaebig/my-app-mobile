import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

type NameInputProps = {
  name: string;
  onInputChange: (value: string) => void;
  onAddName: () => void;
};

export default function NameInput({
  name,
  onInputChange,
  onAddName,
}: NameInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter a name..."
        placeholderTextColor="#cbd5e1"
        style={styles.input}
        value={name}
        onChangeText={onInputChange}
      />
      <Pressable
        onPress={onAddName}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Add</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 48,
    borderColor: "#e2e8f0",
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    fontSize: 15,
    color: "#0f172a",
    fontWeight: "500",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: "#3b82f6",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 48,
  },
  buttonPressed: {
    backgroundColor: "#2563eb",
    opacity: 0.9,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
