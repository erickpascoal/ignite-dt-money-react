import logoImg from '../../assets/images/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dtmoney" />
                <button onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    );
}