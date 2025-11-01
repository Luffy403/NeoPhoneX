type HeaderLi = {
    title: string;
    href: string;
}
type Li = {
    title: string;
}
// пункт списка меню шапки
export function HeaderLi(p:HeaderLi){
    return <li><a href={p.href} className="nav__link">{p.title}</a></li>
}
// пункт списка меню эко системы
export function EcoItem(p:Li){
    return <li className="eco__item">{p.title}</li>
}