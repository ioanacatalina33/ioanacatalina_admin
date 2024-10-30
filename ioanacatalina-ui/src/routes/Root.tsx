import { Outlet } from 'react-router-dom';

import { RootBody, RootWrapper } from './Root.style';
import Header from 'UI/Header/Header';

export default function Root() {
    return (
        <RootBody>
            <Header />
            <RootWrapper>
                <Outlet />
            </RootWrapper>
        </RootBody>
    );
}
