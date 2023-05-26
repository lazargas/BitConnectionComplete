
import { Box, styled, Typography, Divider } from '@mui/material';

import { emptyChatImage } from '../../../constants/data';
import "./EmptyChat.css"

const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height: 100%;
`;

const Container = styled(Box)`
    padding: 0 200px;
`;
    
const Image = styled('img')({
    marginTop: 100,
    width: 400,
    height: "280px",
    width:"280px",
})
   
const Title = styled(Typography)`
    font-size: 32px;
    font-family: inherit;
    font-weight: 300;
    color: #41525d;
    margin-top: 25px 0 10px 0;
`;

const SubTitle = styled(Typography)`
    font-size: 14px;
    color: #667781;
    font-weight: 400;
    font-family: inherit;
`;

const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 0.4;
`;

const EmptyChat = () => {
    
    return (
        <Component>
            <Container>
                <Image src={emptyChatImage} alt="empty" />
                <p className='title' >BIT Connections</p>
                <p className='subtitle' >Head to a new chat</p>
                <StyledDivider />
            </Container>
        </Component>
    )
}

export default EmptyChat;