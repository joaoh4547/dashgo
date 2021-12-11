import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>João Henrique</Text>
                <Text color="gray.300" fontSize="small">
                    joaohenriquetdj@gmail.com
                </Text>
            </Box>
            <Avatar
                size="md"
                name="João Henrique"
                src="http://github.com/joaoh4547.png"
            />
        </Flex>
    );
}
