export function Hero(){
    return (
        // 1 секция
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__copy">
                    <h1 className="hero__text">NeoPhone X</h1>
                    <p className="hero__subtitle">
                        Смартфон, который сочетает мощность и изящество. 
                        Быстрый запуск приложений, плавные анимации и автономность на весь день — в тонком корпусе с премиальной отделкой.
                    </p>
                    <div className="hero__actions">
                        <button className="button button__primary">Смотреть особенности</button>
                        <button className="button button__ghost">Технические данные</button>
                    </div>
                </div>
                <div className="hero__phone">
                    <div className="phone__back">
                        <div className="lock__screen">
                            <div className="lock__top">
                                <span className="lock__time">20:31</span>
                                <span className="lock__date">Вторник, 21 октября</span>
                            </div>
                            <div className="lock__bottom">
                                <span className="lock__btn">🔦</span>
                                <span className="lock__btn">📷</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}