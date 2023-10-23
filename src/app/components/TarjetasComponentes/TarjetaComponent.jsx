import styles from './tarjeta.modules.css'

export default function CreditCard(props) {

  const cardClassName = `${styles['credit-card']} ${styles[props.color]}`;

  return (
    <div className={cardClassName}>
        <h1>{props.numero}</h1>
        <p>{props.color}</p>
        <p>{props.tipo}</p>
    </div>
    )
  }