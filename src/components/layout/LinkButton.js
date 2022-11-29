import styles from './LinkButton.module.css'
import { Link } from 'react-router-dom'

//to: pra onde o usuário sera direcionado ao clicar no botão
//text: texto que vai estar no button

function LinkButton({to, text}){
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  )
}

export default LinkButton