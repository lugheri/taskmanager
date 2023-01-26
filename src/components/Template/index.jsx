import { Outlet } from 'react-router-dom'; 
import { Navbar } from '../Nav';
import { Sidebar } from '../Sidebar';
import * as Styled from './styled';

export const Template = () => {
    return (
        <Styled.Template>
            <Sidebar/>            
            <div className="body">
                <Navbar/>
                <div className="main-container">
                    <Outlet />
                </div>
                
            </div>
            
        </Styled.Template>
    )
}