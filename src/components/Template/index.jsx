import { Outlet } from 'react-router-dom'; 
import { Sidebar } from '../Sidebar';
import * as Styled from './styled';

export const Template = () => {
    return (
        <Styled.Template>
            <Sidebar/>
            <div className="body">
                TEMPLATE
                <Outlet />
            </div>
            
        </Styled.Template>
    )
}