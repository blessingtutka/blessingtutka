import { ReactNode } from 'react';

const Text = ({ children, className }: { children: ReactNode; className?: string }) => {
    return <p className={'text text-lg leading-relaxed text-gray-500 ' + className}>{children}</p>;
};

export default Text;
