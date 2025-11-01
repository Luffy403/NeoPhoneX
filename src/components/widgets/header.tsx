import { ButtonHeader } from '../Button'
import { SpanLogo, SpanLogoItem, SpanLogoText } from '../Span'
import '../styles/header.css'
import { HeaderUl } from '../Ul'

export function Header(){
    return (
        <header className="header">
            <nav className="navbar">
                <SpanLogo text='NeoPhone X' />
                <HeaderUl />
                <ButtonHeader>
                    <SpanLogoItem text='🌓'/>
                    <SpanLogoText text='Тема'/>
                </ButtonHeader>
            </nav>
        </header>
    )
}