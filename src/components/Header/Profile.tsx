import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>João Henrique</Text>
                    <Text color="gray.300" fontSize="small">
                        joaohenriquetdj@gmail.com
                    </Text>
                </Box>
            )}
            <Avatar
                size="md"
                name="João Henrique"
                src="http://github.com/joaoh4547.png"
            />
        </Flex>
    );
}
