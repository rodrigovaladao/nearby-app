import { View, Text } from "react-native"
import { IconPhone, IconMapPin, IconTicket } from "@tabler/icons-react-native"

import { Info } from "@/components/market/info"
import { s } from "./styles"

export type PropsDetails = {
  name: string
  description: string
  address: string
  phone: string
  coupons: number
  rules: {
    id: string
    description: string
  }[]
}

type Props = {
  data: PropsDetails
}

export function Details({ data }: Props) {
  return (
    <View style={s.container}>
      <Text style={s.name}> {data.name} </Text>
      <Text style={s.description}> {data.description} </Text>

      <View style={s.group}>
        <Text style={s.title}>Information</Text>

        <Info icon={IconTicket}
          description={`${data.coupons} Available Coupons`}
        />

        <Info icon={IconMapPin} description={data.address}></Info>

        <Info icon={IconPhone} description={data.phone}></Info>

      </View>

      <View style={s.group}>
        <Text style={s.title}>Rules</Text>
        {data.rules.map((item) => (
          <Text key={item.id} style={s.rule}>
            {`\u2022 ${item.description}`}
          </Text>
        ))}
      </View>

    </View >
  )
}