import './RodaPe.css'

const RodaPe = () => {
    return (<footer className="footer">
        <section>
            <ul>
                <li>
                    <a href="https://www.facebook.com/yagobusse" target="_blank">
                        <img src="/imagens/fb.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.twitter.com" target="_blank">
                        <img src="/imagens/tw.png" alt="" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/yagobusse" target="_blank">
                        <img src="/imagens/ig.png" alt="" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <img src="/imagens/CLANS.png" alt="" />
        </section>
        <section>
            <p>
                Desenvolvido por Yago 
            </p>
            <p>com base do projeto organo da Alura.</p>
        </section>
    </footer>)
}

export default RodaPe