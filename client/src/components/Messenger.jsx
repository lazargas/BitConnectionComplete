import { useContext } from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';

import { AccountContext } from '../context/AccountProvider';

//components
import ChatDialog from './chat/ChatDialog';
import LoginDialog from './account/LoginDialog';

const Component = styled(Box)`
    height: 100vh;
    background: #FF66CC;
    display: flex;
    justify-content:center;
    align-items:center;
`;

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;
    
const LoginHeader = styled(AppBar)`
    background: #20201e;
    height: 200px;
    box-shadow: none;
    position:relative;
`;

const Messenger = () => {
    const { account } = useContext(AccountContext);
    
    return (
        <Component>
            {
                account ? 
                <>
                    
                    <ChatDialog />
                </>
                :
                <>
                    <LoginDialog />
                </>
            }
        </Component>
    )
}

export default Messenger;