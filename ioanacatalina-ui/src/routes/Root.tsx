import { Outlet } from 'react-router-dom';

import { RootBody, RootWrapper } from './Root.style';
import Navbar from 'UI/Navbar/Navbar';

export default function Root() {
    return (
        <RootBody>
            <Navbar />
            <RootWrapper>
                <Outlet />
            </RootWrapper>
        </RootBody>
    );
}
