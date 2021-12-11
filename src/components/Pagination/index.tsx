import { Box, Button, HStack, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

export function Pagination() {
    return (
        <HStack mt="8" justify="space-between" align="center" spacing="6">
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <HStack spacing="2">
                <PaginationItem pageNumber={1} isCurrent />
                <PaginationItem pageNumber={2} />
                <PaginationItem pageNumber={3} />
                <PaginationItem pageNumber={4} />
                <PaginationItem pageNumber={5} />
                <PaginationItem pageNumber={6} />
                <PaginationItem pageNumber={7} />
            </HStack>
        </HStack>
    );
}
