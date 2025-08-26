import { useAuth } from "@/lib/auth-context";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
  const { signOut } = useAuth();
  return (
    <View style = {styles.view}>
      <Text>Hellow World</Text>
      <Button mode="text" onPress={signOut} icon="logout"> Sign out</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton: {
    width: 100,
    height: 20,
    backgroundColor: "coral",
    alignItems: "center",
    borderRadius: 10,
    textAlign: "center"
  }
})