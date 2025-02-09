// wrapper router that includes sidebar and rest of page (outlet)

import {Outlet} from 'react-router-dom';
import SideBar from '../components/SideBar';

const MainLayout = () => {
    return (
        <>
            <SideBar />
            <Outlet />
        </>
    )
};

export default MainLayout;