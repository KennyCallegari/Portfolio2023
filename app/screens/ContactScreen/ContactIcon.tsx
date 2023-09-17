import React, { FC } from "react"
import { SimpleLineIcons, FontAwesome } from "@expo/vector-icons"
import { ICON_SIZE, IData } from "./ContactData"


interface IContactIconProps {
  icon: IData["icon"]
  color: string
}

export const ContactIcon: FC<IContactIconProps> = function ContactIcon(props: IContactIconProps) {
  if (props.icon === 'whatsapp') return <FontAwesome name={props.icon} color={props.color} size={ICON_SIZE} />

  return (
    <SimpleLineIcons name={props.icon} color={props.color} size={ICON_SIZE} />
  )
}
