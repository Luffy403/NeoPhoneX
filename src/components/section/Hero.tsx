import { ButtonGhost, ButtonPrimary } from "../Button"
import { SpanBtn, SpanDate, SpanTime } from "../Span"
import { H1, ParagraphSubtitle } from "../Text"

export function Hero(){
    return (
        // 1 секция
        <section className="hero">
            <div className="container hero__container">
                <div className="hero__copy">
                    <H1 text="NeoPhone X"/>
                    <ParagraphSubtitle text="Смартфон, который сочетает мощность и изящество. 
                        Быстрый запуск приложений, плавные анимации и автономность на весь день — в тонком корпусе с премиальной отделкой."/>
                    <div className="hero__actions">
                        <ButtonPrimary title="Смотреть особенности"/>
                        <ButtonGhost title="Технические особенности"/>
                    </div>
                </div>
                <div className="hero__phone">
                    <div className="phone__back">
                        <div className="lock__screen">
                            <div className="lock__top">
                                <SpanTime text="20:31"/>
                                <SpanDate text="Вторник, 21 октября" />
                            </div>
                            <div className="lock__bottom">
                                <SpanBtn text="🔦" />
                                <SpanBtn text="📷" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}