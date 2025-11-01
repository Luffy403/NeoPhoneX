import { CardPhone } from "../Card";
import { H2Title, H3Card, ParagraphCard } from "../Text";

export function Features(){
    return (
        <section className="section" id="features">
            <div className="container">
                <H2Title text="Особенности NeoPhone X" />
                <div className="cards">
                    <CardPhone>
                        <H3Card text="Яркий экран" />
                        <ParagraphCard text="Детализированная картинка и точная цветопередача — комфортен днём и мягок ночью." />
                    </CardPhone>
                    <CardPhone>
                        <H3Card text="Выносливость" />
                        <ParagraphCard text="Энергосбережение нового поколения. Заряд на весь день при активном использовании." />
                    </CardPhone>
                    <CardPhone>
                        <H3Card text="Защита данных" />
                        <ParagraphCard text="Безопасная биометрия и локальные шифры. Конфиденциальность — стандарт по умолчанию." />
                    </CardPhone>
                </div>
            </div>
        </section>
    )
}