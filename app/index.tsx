import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import NameInput from "./components/NameInput";
import NameItems from "./components/NameItems";

type NameItem = {
  id: string;
  name: string;
};

export default function Index() {
  const [name, setName] = useState("");
  const [namesList, setNamesList] = useState<NameItem[]>([]);

  function handleInputChange(enteredText: string): void {
    setName(enteredText);
  }

  function handleAddName(): void {
    if (!name.trim()) return;

    setNamesList((prev) => [
      ...prev,
      {
        id: Math.random().toString(),
        name: name.trim(),
      },
    ]);

    setName("");
  }
  function handleDeleteName(id: string): void {
    setNamesList((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.header}>
        <Text style={styles.title}>My Names 👋</Text>
        <Text style={styles.subtitle}>
          Add and manage your names with a beautiful interface
        </Text>
      </View>

      <NameInput
        name={name}
        onInputChange={handleInputChange}
        onAddName={handleAddName}
      />

      <View style={styles.listSection}>
        {namesList.length > 0 ? (
          <>
            <Text style={styles.listHeader}>Names ({namesList.length})</Text>
            <FlatList
              data={namesList}
              keyExtractor={(item) => item.id}
              alwaysBounceVertical={false}
              scrollEnabled={false}
              renderItem={({ item }) => (
                <NameItems
                  name={item.name}
                  onDelete={() => handleDeleteName(item.id)}
                />
              )}
            />
          </>
        ) : (
          <View style={styles.emptyState}>
            <Text style={styles.emptyText}>
              No names yet. Add one to get started! ✨
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8fafc",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: "#64748b",
    lineHeight: 22,
  },
  listSection: {
    flex: 1,
    marginTop: 24,
  },
  listHeader: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0f172a",
    marginBottom: 12,
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
  },
  emptyText: {
    fontSize: 16,
    color: "#94a3b8",
  },
});
