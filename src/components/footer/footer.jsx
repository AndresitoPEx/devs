import "./footer.css";

const Footer = () => {
    return <footer className="footer" style={{backgroundImage:"url(/img/Footer.png)"}}>
        <div className="redes">
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/github.png" alt="github"/>
        </a>
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/twitter.png" alt="twitter" />
        </a>
        <a href='https://www.aluracursos.com/'> 
            <img src="/img/linkedin.png" alt="linkedin" />
        </a>
        </div>
        <img  className="miLogo" src='/img/miLogo.png' alt='org' /> 
        <strong>Desarrollado por AR</strong>
    </footer>
}

export default Footer;