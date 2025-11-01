type Span = {
    text : string;
}
// спан с временем
export function SpanTime(p : Span){
    return <span className="lock__time">{p.text}</span>
}
// спан с датой
export function SpanDate(p : Span){
    return <span className="lock__date">{p.text}</span>
}
// спан с кнопкой
export function SpanBtn(p : Span){
    return <span className="lock__btn">{p.text}</span>
}
// спан с лого
export function SpanLogo(p : Span){
    return <span className="header__logo">{p.text}</span>
}
// первый спан в кнопке шапке
export function SpanLogoItem(p : Span){
    return <span className="header__icon">{p.text}</span>
}
// второе спан в кнопке шапке
export function SpanLogoText(p : Span){
    return <span className="header__text">{p.text}</span>
}
// первый спан в подвале
export function SpanFooterCopy(p : Span){
    return <span className="footer__copy">{p.text}</span>
}
// второй спан в подвале
export function SpanFooterTagline(p : Span){
    return <span className="footer__tagline">{p.text}</span>
}
// спан для элемента списка характеристик
export function SpanSpecText(p: Span){
    return <span className="spec__text">{p.text}</span>
}