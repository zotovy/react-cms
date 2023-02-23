import { FC, memo } from "react";
import { Box, Button, ButtonGroup } from "react-untitled-ui"
import { Calendar, Filter } from "react-feather";

export type HeaderProps = {

}

export const Header: FC<HeaderProps> = memo((props) => {
    return <Box alignItems="center" gap="10px" justifyContent="space-between" mt="24px">
        <ButtonGroup>
            <Button variant="secondary-gray">12 months</Button>
            <Button variant="secondary-gray">30 days</Button>
            <Button variant="secondary-gray">7 days</Button>
            <Button variant="secondary-gray">24 hours</Button>
        </ButtonGroup>
        
        <Box gap="12px">
            <Button variant="secondary-gray" trailingIcon={Calendar}>Select dates</Button>
            <Button variant="secondary-gray" trailingIcon={Filter}>Filters</Button>
        </Box>
    </Box>
})