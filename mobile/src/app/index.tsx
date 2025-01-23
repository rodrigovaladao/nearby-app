import { View } from "react-native"
import { router } from "expo-router"

import { Welcome } from "@/components/welcome"
import { Steps } from "@/components/steps"
import { Button } from "@/components/button"
import Home from "./home"


export default function Index() {
  return (
    <View style={{ flex: 1, padding: 40, gap: 40 }}>

      <Welcome />

      <Steps />

      <Button onPress={() => router.navigate("/home")}>
        <Button.Title>Start</Button.Title>
      </Button>

    </View>
  )
}