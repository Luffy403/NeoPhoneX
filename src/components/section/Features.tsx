export function Features(){
    return (
        <section className="section" id="features">
            <div className="container">
                <h2 className="section__title">Особенности NeoPhone X</h2>
                <div className="cards">
                    <article className="card">
                        <h3 className="card__title">Яркий экран</h3>
                        <p className="card__text">
                            Детализированная картинка и точная цветопередача — комфортен днём и мягок ночью.
                        </p>
                    </article>
                    <article className="card">
                        <h3 className="card__title">Выносливость</h3>
                        <p className="card__text">
                            Энергосбережение нового поколения. Заряд на весь день при активном использовании.
                        </p>
                    </article>
                    <article className="card">
                        <h3 className="card__title">Защита данных</h3>
                        <p className="card__text">
                            Безопасная биометрия и локальные шифры. Конфиденциальность — стандарт по умолчанию.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}