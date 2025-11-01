import { HeaderLi } from "./Li";
type Ul = {
    children : React.ReactNode;
}
// меню в шапке
export function HeaderUl(){
    return (
        <ul className="header__ul">
            <HeaderLi href="#features" title="Особенности" />
            <HeaderLi href="#spec" title="Характеристики" />
            <HeaderLi href="#eco" title="Эко-система" />
        </ul>
    ) 
}
// список эко системы
export function EcoList(p:Ul){
    return (
        <ul className="eco__list">
            {p.children}
        </ul>
    )
}