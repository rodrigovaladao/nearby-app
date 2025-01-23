import { View, Text } from "react-native"
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native"

import { s } from "./styles"
import { Step } from "../step"

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Here’s how it works:</Text>
      <Step
        icon={IconMapPin}
        title="Find establishments"
        description="Discover Nearby partner locations close to you"
      />
      <Step
        icon={IconQrcode}
        title="Activate the coupon using a QR Code"
        description="Scan the code at the establishment to redeem your benefit"
      />
      <Step
        icon={IconTicket}
        title="Unlock benefits near you"
        description="Activate coupons wherever you are, at a variety of establishments"
      />

    </View>
  )
}