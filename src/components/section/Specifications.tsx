import { SpecRow } from "../Card"
import { SpanSpecText } from "../Span"
import { H2Title } from "../Text"

export function Specifications(){
    return (
        <section className="section" id="spec">
            <div className="container">
                <H2Title text="Технические характеристики" />
                <div className="spec">
                    <SpecRow>
                        <SpanSpecText text="Экран" />
                        <SpanSpecText text="6.1″, 2400×1080" />
                    </SpecRow>
                    <SpecRow>
                        <SpanSpecText text="Камера" />
                        <SpanSpecText text="50 Мп" />
                    </SpecRow>
                    <SpecRow>
                        <SpanSpecText text="Память" />
                        <SpanSpecText text="128 ГБ" />
                    </SpecRow>
                    <SpecRow>
                        <SpanSpecText text="Батарея" />
                        <SpanSpecText text="4500 мА·ч" />
                    </SpecRow>
                </div>
            </div>
        </section>
    )
}