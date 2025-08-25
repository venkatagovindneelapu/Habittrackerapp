import { useState } from "react";
import { Alert, Image, KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleAuth = () => {
    if (!email || !password) {
      Alert.alert("Missing details", "Please enter your email and password.");
      return;
    }
  }

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev)
  };

  return (
    <SafeAreaView
      style={styles.safeareaviewer}
      edges={["top", "bottom", "left", "right"]}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <View style={styles.content}>
          <Image source={require("../assets/images/image2auth.png")} style={styles.logo} />
          <Text style={styles.title}>
            {isSignUp ? "Create Account" : "Welcome Back"}
          </Text>

          <TextInput
            label="Email"
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="example@gmal.com"
            mode="outlined"
            style={styles.input}
            onChangeText={setEmail}
          />

          <TextInput
            label="Password"
            autoCapitalize="none"
            keyboardType="email-address"
            mode="outlined"
            style={styles.input}
            onChangeText={setPassword}
          />

          <Button mode="contained" style={styles.button} onPress={handleAuth}>
            {isSignUp ? "SignUp" : "SignIn"}
          </Button>

          <Button mode="text" onPress={handleSwitchMode}>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Dont have an account? Sign Up"}
          </Button>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeareaviewer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 16,
  },
  logo: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginBottom: 24,
  }
});
