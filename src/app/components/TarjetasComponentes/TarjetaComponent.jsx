export default function CreditCard({ card }) {
    const router = useRouter()
  
    if (router.isFallback) {
      return <div>Loading...</div>
    }
  
    return (
      <div>
        <h1>{card.name}</h1>
        <p>{card.description}</p>
        <p>Annual fee: {card.annualFee}</p>
        <p>APR: {card.apr}</p>
      </div>
    )
  }