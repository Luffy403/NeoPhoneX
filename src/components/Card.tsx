type SpecRow = {
    children : React.ReactNode;
}
// Элемент списка характеристик
export function SpecRow(p:SpecRow){
    return <div className="spec__row">
        {p.children}
    </div>
}
// Элемент особенности телефона
export function CardPhone(p:SpecRow){
    return <article className="card">
        {p.children}
    </article>
}