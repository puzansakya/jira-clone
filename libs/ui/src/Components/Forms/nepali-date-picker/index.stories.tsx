import type {Meta} from '@storybook/react';
import {NepaliDatePicker} from ".";
import {ChakraProvider} from "@chakra-ui/react";
import {CALENDAR_MODE} from "./calendar-engine";

const meta: Meta<typeof NepaliDatePicker> = {
    component: NepaliDatePicker,
    title: 'Forms/Date Picker Nepali',
};

export default meta;

export const Default = {
    args: {
        date: "2023-07-20",
        dateType: CALENDAR_MODE.ENGLISH,
        calendarDate: "2023-07-20",
        is_dark: true
    },
    render: (args:any) => {
        return <ChakraProvider>
            <NepaliDatePicker {...args}/>
        </ChakraProvider>
    }
};
