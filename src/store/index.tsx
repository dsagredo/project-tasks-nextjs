import { ReactNode } from 'react';
import { Provider } from 'jotai';

export default function StoreProvider({
    children,
}: {
    children: ReactNode;
}): JSX.Element {
    return <Provider>{children}</Provider>;
}
