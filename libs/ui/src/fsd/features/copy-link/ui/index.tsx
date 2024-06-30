import { Button } from "@chakra-ui/react"

export const CopyLinkButton = () => {
    const copyLinkHnadler = () => {
        navigator.clipboard.writeText(window.location.href);
    }

    return <Button
        bg="white"
        fontSize="sm"
        size="sm"
        fontWeight="normal"
        borderRadius="sm"
        onClick={copyLinkHnadler}
    >
        Copy Link
    </Button>
}