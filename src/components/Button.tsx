type Button = {
    title: string;
}
type ButtonHeader = {
    children : React.ReactNode;
}
// первая кнопка
export function ButtonPrimary(p : Button){
    return <button className="button button__primary">{p.title}</button>
}
// вторая кнопка
export function ButtonGhost(p : Button){
    return <button className="button button__ghost">{p.title}</button>
}
// кнопка в шапке
export function ButtonHeader(p:ButtonHeader){
   return (
        <button className="header__button">
            {p.children}
        </button>
   )
}