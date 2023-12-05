import { Controller } from 'react-hook-form';
import { isEmpty } from 'lodash';
import * as fromHelpers from '../../../helpers';
import * as fromFormHelpers from '../@form-helper';
import { usePxSelect } from './usePxSelect';
import {
  PxIssueTypeUncontrollerComponent,
  PxPriorityUncontrollerComponent,
  PxReporterUncontrollerComponent,
  PxStatusUncontrollerComponent,
  PxUncontrollerComponent,
} from './PxUncontrollerComponent';

export const PxRhfComponent = (
  props: any //PxControlledComponentProps
) => {
  const { control, rule, name, required } = usePxSelect();

  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => {
        return (
          <PxUncontrollerComponent
            value={value}
            onChangeRHF={onChange}
            {...props}
          />
        );
      }}
    />
  );
};

export const PxStatusRhfComponent = (
  props: any //PxControlledComponentProps
) => {
  const { control, rule, name, required } = usePxSelect();

  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => {
        return (
          <PxStatusUncontrollerComponent
            value={value}
            onChangeRHF={onChange}
            {...props}
          />
        );
      }}
    />
  );
};

export const PxPriorityRhfComponent = (
  props: any //PxControlledComponentProps
) => {
  const { control, rule, name, required } = usePxSelect();

  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => {
        return (
          <PxPriorityUncontrollerComponent
            value={value}
            onChangeRHF={onChange}
            {...props}
          />
        );
      }}
    />
  );
};

export const PxIssueTypeRhfComponent = (
  props: any //PxControlledComponentProps
) => {
  const { control, rule, name, required } = usePxSelect();

  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => {
        return (
          <PxIssueTypeUncontrollerComponent
            value={value}
            onChangeRHF={onChange}
            {...props}
          />
        );
      }}
    />
  );
};

export const PxReporterRhfComponent = (
  props: any //PxControlledComponentProps
) => {
  const { control, rule, name, required } = usePxSelect();

  let _rule: any = fromFormHelpers.getDefaultRules({ required });

  if (!isEmpty(rule)) {
    _rule = fromHelpers.deepMerge(_rule, rule);
  }

  return (
    <Controller
      control={control}
      name={name}
      rules={_rule}
      render={({ field: { onChange, value } }) => {
        return (
          <PxReporterUncontrollerComponent
            value={value}
            onChangeRHF={onChange}
            {...props}
          />
        );
      }}
    />
  );
};
