import React from 'react';

/**
 * 1. Define Context with default values
 * 2. Define Parent Component
 * 3. Define usable hook
 * 4. Define required child component
 * 5. Compose into default
 * 6. export all
 *
 */
// 1.
export const PxInputEditorContext = React.createContext<any>({
  label: 'Sample label',
  control: undefined,
  ignoreControl: false,
  required: false,
  showOptionalLabel: true,
  errors: undefined,
  rule: undefined,
  width: undefined,
  customLabel: undefined,
  labelPosition: undefined,
  errorMessage: undefined,
});
PxInputEditorContext.displayName = 'PxInputEditorContext';
