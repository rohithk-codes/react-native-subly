import "@/global.css";
import { Text } from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-sans-bold text-success">Home</Text>
    
      <Link
        href="/onboarding"
        className="mt-4 rounded font-sans-bold bg-primary text-white p-4" 
      >
        Go to Onboarding
      </Link>
      <Link
        href="/(auth)/sign-in"
        className="mt-4 rounded font-sans-bold bg-primary text-white p-4"
      >
        Sign-In
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded font-sans-bold bg-primary text-white p-4"
      >
        SignUp
      </Link>
      <Link href="/subscriptions/spotify">Spotify Sub </Link>
      <Link
        href={{ pathname: "/subscriptions/[id]", params: { id: "claude" } }}
      >
        Claude Max{" "}
      </Link>
    </SafeAreaView>
  );
}
