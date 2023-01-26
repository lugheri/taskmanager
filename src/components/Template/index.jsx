import { Outlet } from 'react-router-dom'; 
import * as Styled from './styled';

export const Template = () => {
    return (
        <Styled.Template>
            <>
                TEMPLATE
                <Outlet />
            </>
            
        </Styled.Template>
    )
}