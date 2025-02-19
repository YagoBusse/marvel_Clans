/* eslint-disable react/prop-types */
import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../listaSuspensa'
import './Formulario.css'

const Formulario = (props) => {
   

    const [nome, setNome] = useState('')
    const [personagem, setPersonagem] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoJogadorCadastrado({
            nome,
            personagem,
            imagem,
            time
        })
        setNome('')
        setPersonagem('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o perfil do Jogador</h2>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" valor={nome} aoAlterado={valor => setNome(valor)}/>
                <CampoTexto obrigatorio={true} label="Personagem" placeholder="Digite seu personagem favorito" valor={personagem} aoAlterado={valor => setPersonagem(valor)}/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" valor={imagem} aoAlterado={valor => setImagem(valor)}/>
                <ListaSuspensa obrigatorio={true} label="Tipo de time" itens={props.times} value={time} aoAlterado={valor => setTime(valor)}/>
                <Botao>
                    Criar Perfil
                </Botao>
            </form>
        </section>
    )
}

export default Formulario