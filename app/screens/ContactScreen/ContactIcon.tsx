import React, { FC } from "react"
import { SimpleLineIcons } from "@expo/vector-icons"
import { ICON_SIZE, IData } from "./ContactData"


interface IContactIconProps {
  icon: IData["icon"]
  color: string
}

export const ContactIcon: FC<IContactIconProps> = function ContactIcon(props: IContactIconProps) {
  return (
    <SimpleLineIcons name={props.icon} color={props.color} size={ICON_SIZE} />
  )
}
