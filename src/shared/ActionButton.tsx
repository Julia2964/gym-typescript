import AnchorLink from "react-anchor-link-smooth-scroll"
import React from "react"
import { SelectedPage } from "./types";


type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage}: Props) => {
  return ( // der ActionButton der definiert ist, ist im Prinzip nur ein AnchorLink mit mehr Design/Abgerunderter ausgefüllter Button
    <AnchorLink
        className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white" // Design vom Button, wie er sich verändert
        onClick={() => setSelectedPage(SelectedPage.ContactUs)} // onClick-Aktion soll selectedPage auf ContactUs setzen
        href={`#${SelectedPage.ContactUs}`} // Link zu ContactUs
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton