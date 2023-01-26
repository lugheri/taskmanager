import styled from 'styled-components'
import { colors } from '../../styles/colors'

export const Sidebar = styled.div`
    display: flex;
    flex-direction:column;
    background-color: ${ colors.side };
    background-image: linear-gradient(to bottom left,${colors.bg_side_secondary},${colors.bg_side});
    height: 100vh;
    width: 5%;
    overflow-x: hidden;
    box-shadow: 2px 0px 3px rgba(0,0,0,.5);

    .brand{
        display: flex;
        height: 60px;
        align-items: center;
        justify-content: center;
       
        padding:20px 0;
        border-bottom:2px solid ${colors.primary};
        font-size:.7rem;
     
        >svg{
            font-size: 2rem;
            color: #9b59b6;
        }

        .logo{
            width: 100%;
        }
    }

    .nav{
        margin-top:25px;
        flex:1;

        >ul{
           
            >li{
                > a{
                    color: ${colors.light};
                    display: flex;
                    justify-content:center;
                    align-items:center;
                    flex:1;
                    padding: 25px 0;
                    font-size: 1.1rem;
                    position: relative;
                    -webkit-transition: all .4s;
                    transition: all .4s;
                    list-style: none;
                    position:relative;
                    text-align: left;
                    opacity: .5;
                    text-decoration:none;
                    
                    > svg{
                        font-size: 1.5rem;
                    }
                }

                > a:hover{
                    background:${colors.secondary};
                    color: #fff;
                    transition:ease-in .2s;
                    opacity: .7;
                   
                }

                > .active{
                    color: #fff;
                    font-weight:bold;
                    opacity: 1;
                }
            }
        }
    }
     
    >.footer{
        >ul{
            >li{
                > a{
                    color: ${colors.light};
                    display: flex;
                    justify-content:center;
                    align-items:center;
                    flex:1;
                    padding: 25px 0;
                    font-size: 1.1rem;
                    position: relative;
                    -webkit-transition: all .4s;
                    transition: all .4s;
                    list-style: none;
                    position:relative;
                    text-align: left;
                    opacity: .5;
                    text-decoration:none;
                    
                    > svg{
                        font-size: 1.5rem;
                    }
                }

                > a:hover{
                    background:${colors.secondary};
                    color: #fff;
                    transition:ease-in .2s;
                    opacity: .7;
                   
                }

                > .active{
                    color: #fff;
                    font-weight:bold;
                    opacity: 1;
                }
            }
        }
    }

`