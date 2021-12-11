import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { useSideBarDrawer } from "../../contexts/SidebarDrawerContext";
import { Logo } from "./Logo";
import { NotificationsNav } from "./NotificationsNav";
import { Profile } from "./Profile";
import { SearchBox } from "./SearchBox";
export function Header() {
    const isWideVersion = useBreakpointValue({ base: false, lg: true });
    const { onOpen } = useSideBarDrawer();
    return (
        <Flex
            w="100%"
            as="header"
            maxW={1480}
            h="20"
            mx="auto"
            mt="4"
            align="center"
            px="6"
        >
            {!isWideVersion && (
                <IconButton
                    display="flex"
                    aria-label="open navigation"
                    icon={<Icon as={RiMenuLine} />}
                    fontSize="24"
                    variant="unstyled"
                    onClick={onOpen}
                    mr="2"
                ></IconButton>
            )}
            <Logo />
            {isWideVersion && <SearchBox />}
            <Flex align="center" ml="auto">
                <NotificationsNav />
                <Profile showProfileData={isWideVersion} />
            </Flex>
        </Flex>
    );
}
