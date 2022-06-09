import { Button, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, useDisclosure } from "@chakra-ui/react"
import { SetStateAction } from "react";


interface DrawerDetailsProps {
  showDetail: boolean;
}

export function DrawerDetails({ showDetail }: DrawerDetailsProps) {

  return (
    <>

      <Drawer placement={'bottom'} isOpen={false}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}