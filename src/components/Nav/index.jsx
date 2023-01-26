import * as Styled from './styled';

import * as Icon from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

export const Navbar = () => {
    return(
        <Styled.Navbar>
            <>
                <div className="title">
                    <small>Tasks Manager <FontAwesomeIcon icon={Icon.faChevronRight} />Today</small>
                    <p>Task Manager</p>   
                </div>
                <div className="actions">
                    <div className="btn-nav">
                        <FontAwesomeIcon icon={Icon.faBellSlash} />
                    </div>
                </div>
            </>
                     
        </Styled.Navbar>
    )
}