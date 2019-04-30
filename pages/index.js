import react from 'react';
import InstagramIcon from 'mdi-react/InstagramIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import EmailOpenOutlineIcon from 'mdi-react/EmailOpenOutlineIcon';
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
     LandingSection,
     BigParagraph,
     Footer,
     FooterSection,
     SecondBackground,
     FirstBackground,
     LogoIso } from './styles';
import logo from '../assets/images/logo.png';
import logoIso from '../assets/images/logo-iso.png';
import shapes from '../assets/images/shapes.png';
import shapeRight from '../assets/images/shape-right.png';
import scrollIcon from '../assets/images/scroll-icon.png';
import yellowShape from '../assets/images/yellow-shape.png';
import purpleShape from '../assets/images/purple-shape.png';

const Index = () => (

    <Container>
        <Header>
            <LogoContainer>
                <Logo src={logo} alt=""/>
                <LinkHeader>SOBRE NOSOTROS</LinkHeader>
            </LogoContainer>
            <Button>REGISTRATE AQUÍ</Button>
        </Header>
        <FirstBackground />
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
                <ScrollIcon src={scrollIcon} alt="" onClick={
                    () => {
                        document.querySelector('#main').scrollIntoView({ 
                            behavior: 'smooth' 
                          });
                    }
                    
                } />
            </HeroContent>

            <LandingSection id="main" style={{justifyContent: 'space-around'}}>
                <img src={yellowShape} alt="" style={{width: '137px'}}/>
                <BigParagraph>Si eres diseñador, artesano o artista, mereces ser reconocido a nivel mundial</BigParagraph>
                <BigParagraph><strong>Tu creación,</strong> inspiración, arte, horas de trabajo y esfuerzo son importantes para nosotros, haremos búsquedas constantes  de los productos que confías a nuestras manos para asegurarnos que nadie ocupa tu talento.</BigParagraph>
                <img src={purpleShape} alt="" style={{width: '137px'}}/>
            </LandingSection>
            <LandingSection height="auto">
                <HeroContent>
                    <h1>Tu confianza</h1>
                    <h3>es un honor</h3>
                    <h4>por tal motivo trabajaremos en conjunto con organizaciones para apoyar y fomentar el talento de la creatividad.</h4>
                    <BigParagraph>Estamos <strong>¡Haciendo el cambio!</strong></BigParagraph>
                </HeroContent>
            </LandingSection>
            <LandingSection height="70vh" style={{position: 'relative'}}>
            <SecondBackground />
            <HeroContent>
                <HeroImages>
                <Shapes hideOnMobile style={{opacity: 0}} src={shapes} alt="" />
                <h1>Unete</h1>
                <Shapes hideOnMobile style={{marginLeft: '43px'}} src={shapeRight} alt="" />
                </HeroImages>
                    <h3>a nosotros</h3>
                    <Button large style={{marginTop: '106px'}}>REGÍSTRATE AQUÍ</Button>
                </HeroContent>

            </LandingSection>

            <Footer>
                <FooterSection>
                    <FacebookIcon />
                    <InstagramIcon />
                    <span style={{marginLeft: '10px'}}>@ourholystyle</span>
                </FooterSection>
                <FooterSection>
                    <EmailOpenOutlineIcon />
                    <span style={{marginLeft: '10px'}}>info@ourholystyle</span>
                </FooterSection>
            </Footer>
        </Hero>
    </Container>
);

export default Index