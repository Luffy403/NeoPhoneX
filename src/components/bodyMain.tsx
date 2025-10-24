import { Features } from './section/Features'
import { Hero } from './section/Hero'
import { Specifications } from './section/Specifications'
import { Eco } from './section/Eco'
import './styles/bodyMain.css'

export function BodyMain(){
    return (
        <main className='main'>
            <Hero />
            <Features />
            <Specifications />
            <Eco />
        </main>
    )
}