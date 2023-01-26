import styled from 'styled-components';
import { colors } from '../../styles/colors'

export const Navbar = styled.div`
    display:flex;
    width:100%;
    height:70px;
    align-items: center ;
    justify-content: left;
    padding:20px;

    >.title{
      flex:1;
      padding:10px;

      >small{
        font-size:.9rem;
        color:#ffffff44;
        >svg{
          margin:0 5px;
          font-size:.7rem;
        }
      }
      >p{
        font-weight: bold;
        color:#ffffff;
        font-size:1.5rem;
        padding-top:10px;
      }
    }

    >.actions{
      display:flex;
      flex:1;
      justify-content:flex-end;
      align-items: center;
      padding:10px;
    }

  `