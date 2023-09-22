export default function Product (props){
 const productsList = props.products.map((product)=>(
  <p key = {product.id}>{product.name + ':'+ ' $'+product.price}</p>

))
const fruitsList = props.fruits.map((fruit)=>(<p key = {props.fruits.indexOf(fruit)}>{fruit}</p>))
  return(
    <div>
      {fruitsList}
    </div>
  )
}