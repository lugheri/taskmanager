import * as Styled from './styled';
import { NavLink } from 'react-router-dom';
import * as Icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

export const Sidebar = () => {   
    return(
        <Styled.Sidebar>
            <div className="brand"><FontAwesomeIcon icon={Icon.faSliders}/></div>
            <nav className="nav">
                <ul>
                    <li>
                        <NavLink to="/">
                            <FontAwesomeIcon icon={Icon.faChartGantt}/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/day">
                            <FontAwesomeIcon icon={Icon.faCalendar}/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/tasks"> 
                            <FontAwesomeIcon icon={Icon.faListCheck}/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/planner">
                            <FontAwesomeIcon icon={Icon.faDiagramProject}/>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="footer">
                <ul>
                    <li>
                        <NavLink to="/setup">
                            <FontAwesomeIcon icon={Icon.faCogs}/>
                        </NavLink>
                    </li>                   
                </ul>
            </div>
        </Styled.Sidebar>
    )
}