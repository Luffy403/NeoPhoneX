import { EcoItem } from "../Li";
import { H2Title } from "../Text";
import { EcoList } from "../Ul";

export function Eco(){
    return (
        <section className="section" id="eco">
            <div className="container">
                <H2Title text="Эко - система Neo" />
                <EcoList>
                    <EcoItem title="Фирменные приложения для повседневных задач и творчества."/>
                    <EcoItem title="Синхронизация между устройствами и облачное резервирование."/>
                    <EcoItem title="Быстрые обновления и расширяемые возможности." />
                    <EcoItem title="Минималистичный интерфейс без лишних шагов."/>
                    <EcoItem title="Поддержка аксессуаров Neo для работы и отдыха."/>
                </EcoList>
            </div>
        </section>
    )
}