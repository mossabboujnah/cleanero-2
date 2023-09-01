import './buttonTwo.css'
let icone = 'images/test-icone.svg'

const ButtonTwo = ({icon, text, url}) =>{
    return (<a href={url} className='buttonTwo'>
             <img src={icone} alt="phone"/>
             <p>{text}</p>
            </a>
        );
}

export default ButtonTwo;