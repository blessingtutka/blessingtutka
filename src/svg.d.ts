/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string; className?: string }>;

    const src: string;
    export default src;
}

declare module '*.png' {
    const value: any;
    export default value;
}
