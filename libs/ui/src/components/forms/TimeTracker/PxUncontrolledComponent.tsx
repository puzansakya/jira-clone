import TimeTrackerComponent from './components/TimeTrackerComponent';
import {usePxTimeTracker} from "./usePxTimeTracker";
import React from "react";

interface PxUncontrolledComponentProps extends Record<string, any> {
    onChangeRHF?: any;
    value?: any;
}

export const PxUncontrolledComponent = (
    props: PxUncontrolledComponentProps
) => {
    const {onChangeRHF, value: rhfValue} = props;

    const {
        name,
        options,
        label,
        control,
        errors,
        required,
        rule,

        // this is user defined value for uncontrolled component
        value,
        getValues,
        setValue,
        reset,
        // watch,
        onChange: _onChange,
        timeEstimate,
        ...contextRest
    } = usePxTimeTracker();

    const handleChange = (value: any) => {

        _onChange?.(name, value.timeSpent);
        onChangeRHF?.(value.timeSpent);
        setValue("estimate", value?.timeEstimate)

    };

    const
        inputProps = {
            ...contextRest,
        };

    const valueNormalized = rhfValue ?? value;
    // const timeEstimate = watch?.("estimate") ?? 0

    const nextValue = {
        timeSpent: valueNormalized,
        timeEstimate: parseInt(timeEstimate)
    }
    return (
        <TimeTrackerComponent onChange={handleChange} value={nextValue} {...inputProps} />
    );
};
