import { Pressable, StyleSheet, Text, View } from "react-native";

type NameItemsProps = {
  name: string;
  onDelete: () => void;
};

export default function NameItems({ name, onDelete }: NameItemsProps) {
  return (
    <View style={styles.wrapper}>
      <Pressable
        android_ripple={{ color: "rgba(59, 130, 246, 0.1)" }}
        onPress={onDelete}
        style={({ pressed }) => [
          styles.pressable,
          pressed && styles.pressablePressed,
        ]}
      >
        <View style={styles.itemContainer}>
          <View style={styles.itemContent}>
            <Text style={styles.itemText}>{name}</Text>
          </View>
          <View style={styles.deleteIcon}>
            <Text style={styles.deleteText}>×</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  pressable: {
    flex: 1,
  },
  pressablePressed: {
    opacity: 0.7,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 14,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemContent: {
    flex: 1,
    marginRight: 10,
  },
  itemText: {
    color: "#0f172a",
    fontSize: 16,
    fontWeight: "500",
  },
  deleteIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#fee2e2",
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "#dc2626",
    fontSize: 24,
    fontWeight: "bold",
  },
});
