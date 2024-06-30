import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

interface FilterIssueProps {
    filters: any;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
}
export const FilterIssue = ({ onChange, filters }: FilterIssueProps) => {
    return <InputGroup w={44} size="sm">
        <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
            />
        <Input
            bg="gray.100"
            type="text"
            value={filters.query || ''}
            name="query"

            onChange={onChange}
        />
    </InputGroup>
}