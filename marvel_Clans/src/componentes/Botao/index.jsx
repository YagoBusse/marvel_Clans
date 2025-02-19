/* eslint-disable react/prop-types */
import './Botao.css'

const Botao = (props) => {
    //usando o .children o react entende que deve puxar o que tiver dentro da tag <Botao/> dessa forma pode ser inserido mais
    //de um tipo de informaçao, por exemplo, imgs, icons e etc.
    //outra forma seria usar o props.text já que seria usando dentro da tag <Botao text="..."/>
    return (
        <button className='botao'>
            {props.children}
        </button>
    )
}

export default Botao