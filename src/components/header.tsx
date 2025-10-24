import './styles/header.css'

export function Header(){
    return (
        <header className="header">
            <nav className="navbar">
                <span className="header__logo">NeoPhone X</span>
                <ul className="header__ul">
                    <li><a href="#features" className="nav__link">Особенности</a></li>
                    <li><a href="#spec"className='nav__link'>Характеристики</a></li>
                    <li><a href="#eco" className='nav__link'>Эко-система</a></li>
                </ul>
                <button className="header__button">
                    <span className="button__icon">🌓</span>
                    <span className="button__text">Тема</span>
                </button>
            </nav>
        </header>
    )
}