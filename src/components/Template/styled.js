import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Template = styled.div`
    display: flex;
    background-image: linear-gradient(to bottom right,${colors.bg},${colors.bg_middle},${colors.bg_secondary});
    
    >.body{ 
        flex:1;
        display:flex;
        flex-direction: column;

        >.main-container{
            overflow:auto;
            flex:1;
            padding:10px 0px 2px 20px;

        }
    }
`