import Single from "../../components/single/Single"
import { singleProduct } from "../../data"
import "./product.scss"

const Compra = () => {

  return (
    <div className="product">
       <Single {...singleProduct}/>
       
    </div>
  )
}

export default Compra