/* eslint-disable react/prop-types */

import Jogador from '../Jogador'
import './Time.css'

const Time = (props) => {
    return (
        props.jogadores.length > 0 && <section className='time' style={{backgroundColor: props.corSecundaria}}>
         <h3 style={{borderBlockColor: props.corPrimaria}}>{props.nome}</h3>
         <div className='jogadores'>
         {props.jogadores.map(jogador => <Jogador corFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} personagem={jogador.personagem} imagem={jogador.imagem} />)}
         </div>
        </section>
    )
}

export default Time