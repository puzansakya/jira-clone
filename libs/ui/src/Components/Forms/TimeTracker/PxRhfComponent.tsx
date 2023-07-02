import {Controller} from 'react-hook-form';
import {isEmpty} from 'lodash';
import * as fromHelpers from '../../../Helpers';
import * as fromFormHelpers from '../@form-helper';
import {usePxTimeTracker} from './usePxTimeTracker';
import {PxUncontrolledComponent,} from './PxUncontrolledComponent';

export const PxRhfComponent = (
    props: any //PxControlledComponentProps
) => {
    const {control, rule, name, required} = usePxTimeTracker();

    let _rule: any = fromFormHelpers.getDefaultRules({required});

    if (!isEmpty(rule)) {
        _rule = fromHelpers.deepMerge(_rule, rule);
    }

    return (
        <Controller
            control={control}
            name={name}
            rules={_rule}
            render={({field: {onChange, value}}) => {
                return (
                    <PxUncontrolledComponent
                        value={value}
                        onChangeRHF={onChange}
                        {...props}
                    />
                );
            }}
        />
    );
};

