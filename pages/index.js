import react, { Component } from 'react';
import InstagramIcon from 'mdi-react/InstagramIcon';
import FacebookIcon from 'mdi-react/FacebookIcon';
import EmailOpenOutlineIcon from 'mdi-react/EmailOpenOutlineIcon';
import Modal from 'react-responsive-modal';
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
     ScrollIconContainer,
     LandingSection,
     BigParagraph,
     Footer,
     FooterSection,
     SecondBackground,
     Tile,
     ScrollIconB,
     FirstBackground,
     LogoIso } from './styles';
import ContactModal from './components/ContactModal';
import logo from '../assets/images/logo.png';
import logoIso from '../assets/images/logo-iso.png';
import shapes from '../assets/images/shapes.png';
import shapeRight from '../assets/images/shape-right.png';
import scrollIcon from '../assets/images/scroll-icon.png';
import yellowShape from '../assets/images/yellow-shape.png';
import purpleShape from '../assets/images/purple-shape.png';
import tile from '../assets/images/tile.svg';


class Index extends Component{

    state = {
        isModalOpen : false,
    }

    toggleModal() {
        const { isModalOpen } = this.state;
        this.setState({ isModalOpen: !isModalOpen });
    }

    render(){
 
        const { isModalOpen } = this.state;
 
        return  (

            <Container>
                <Header>
                    <LogoContainer>
                        <Logo src={logo} alt=""/>
                        <LinkHeader>SOBRE NOSOTROS</LinkHeader>
                    </LogoContainer>
                    <Button onClick={() => this.toggleModal()}>REGISTRATE AQUÍ</Button>
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
                        <ScrollIconContainer onClick={
                            () => {
                                document.querySelector('#main').scrollIntoView({ 
                                    behavior: 'smooth' 
                                  });
                            }
                        }>
                        <ScrollIconB><span>.</span></ScrollIconB>
                        <img src={scrollIcon} alt="" />
                        </ScrollIconContainer>
                    </HeroContent>
        
                    <LandingSection id="main" style={{justifyContent: 'space-around'}}>
                        <img src={yellowShape} alt="" style={{width: '137px'}}/>
                        <div>
                            <BigParagraph>Si eres diseñador, artesano o artista, mereces ser reconocido a nivel mundial.</BigParagraph>
                            <BigParagraph><strong>Tu creación,</strong> inspiración, arte, horas de trabajo y esfuerzo son importantes para nosotros, haremos búsquedas constantes  de los productos que confías a nuestras manos para asegurarnos que nadie ocupa tu talento.</BigParagraph>
                        </div>
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
                    <LandingSection height="50vh" style={{position: 'relative'}}>
                    <SecondBackground />
                    <HeroContent>
                        <HeroImages>
                        <Shapes adjustOnMobile style={{opacity: 0}} src={shapeRight} alt="" />
                        <h1>                <Tile src={tile} />
                            Unete</h1>
                        <Shapes adjustOnMobile src={shapeRight} alt="" />
                        </HeroImages>
                            <h3>a nosotros</h3>
                            <Button onClick={() => this.toggleModal()} large style={{marginTop: '30px'}}>REGÍSTRATE AQUÍ</Button>
                        </HeroContent>
        
                    </LandingSection>
        
                    <Footer>
                        <FooterSection>
                            <a href="https://www.facebook.com/ourholystyle/" target="blank"><FacebookIcon /></a>
                            <a href="https://www.instagram.com/ourholystyle/" target="blank"><InstagramIcon /></a>
                            <span style={{marginLeft: '10px'}}>@ourholystyle</span>
                        </FooterSection>
                        <FooterSection>
                        <a href="mailto:info@ourholystyle.com" target="blank">
                            <EmailOpenOutlineIcon />
                            <span style={{marginLeft: '10px'}}>info@ourholystyle</span>
                        </a>
                        </FooterSection>
                    </Footer>
                </Hero>
                <Modal 
                    open={isModalOpen}  onClose={ () => this.toggleModal()} center  classNames={{
                        modal: "customModal",
                        overlay: 'overlayModal'
                      }}>
                    <ContactModal />
                </Modal>
            </Container>
        );       
    }
}

export default Index;