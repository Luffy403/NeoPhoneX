type text = {
    text: string;
}
// заголовок первого уровня
export function H1(p:text){
    return <h1 className="hero__text">{p.text}</h1>
}
// параграф
export function ParagraphSubtitle(p:text){
    return <p className="hero__subtitle">{p.text}</p>
}
// заголовок 2-го уровня
export function H2Title(p:text){
    return <h2 className="section__title">{p.text}</h2>
}
// заголовок 3-го уровня
export function H3Card(p:text){
   return <h3 className="card__title">{p.text}</h3>
}
// параграф элемента особенности телефона
export function ParagraphCard(p:text){
    return <p className="card__text">{p.text}</p>
}