import { SpanFooterCopy, SpanFooterTagline } from '../Span'
import '../styles/footer.css'

export function Footer(){
    return(
        <footer className="footer">
            <nav className="navbar">
                <SpanFooterCopy text='© 2025 NeoPhone. Все права защищены.' />
                <SpanFooterTagline text='Лёгкость в деталях. Сила — внутри.' />
            </nav>
        </footer>
    )
}