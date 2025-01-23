import { View, Image, Text } from "react-native";
import { s } from "./styles";

export function Welcome() {
  return (
    <View>
      <Image source={require("@/assets/logo.png")} style={s.logo} />
      <Text style={s.title}>Welcome to Nearby!</Text>
      <Text style={s.subtitle}>Get exclusive coupons to use at your favourite establishments.</Text>
    </View>
  )
}
