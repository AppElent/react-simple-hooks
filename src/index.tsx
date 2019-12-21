import * as React from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
}

export const Hello = (props: HelloProps): React.ReactNode => (
    <h1>
        Hello from {props.compiler} and {props.framework}!
    </h1>
);

export { default as useForm } from './useForm';
export { default as useLocalStorage } from './useLocalStorage';
export { default as useMaterialUIMenu } from './useMaterialUIMenu';
export { default as useModal } from './useModal';
export { default as useStateExtended } from './useStateExtended';
export { default as useTabs } from './useTabs';
