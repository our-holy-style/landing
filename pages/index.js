import react from 'react';
import { Container,
     Header,
     Logo,
     LinkHeader,
     Hero,
     Button,
     LogoContainer,
     HeroContent,
     HeroImages,
     Shapes,
     ScrollIcon,
     LogoIso } from './styles';
import logo from '../assets/images/logo.png';
import logoIso from '../assets/images/logo-iso.png';
import shapes from '../assets/images/shapes.png';
import scrollIcon from '../assets/images/scroll-icon.png';

const Index = () => (

    <Container>
        <Header>
            <LogoContainer>
                <Logo src={logo} alt=""/>
                <LinkHeader>SOBRE NOSOTROS</LinkHeader>
            </LogoContainer>
            <Button>REGISTRATE AQUÍ</Button>
        </Header>
        <Hero>
            <HeroContent>
                <HeroImages>
                    <Shapes src={shapes} alt="" />
                    <LogoIso src={logoIso} alt="" />
                    <Shapes style={{opacity: 0}} src={shapes} alt="" />
                </HeroImages>
                <h1>Nuestra</h1>
                <h3>misión</h3>
                <h4>es que el mundo conozca <strong>tu talento</strong></h4>
                <ScrollIcon src={scrollIcon} alt="" />
            </HeroContent>
        </Hero>
    </Container>
);

export default Index