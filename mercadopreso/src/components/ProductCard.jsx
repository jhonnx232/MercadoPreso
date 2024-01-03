
import propTypes from 'prop-types'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'



function ProductCard({ data }) {
    const navigate = useNavigate()
    const {title , image , price  } = data
  
    

  


    return(
       
        <section className='product-card'>
            <img 
            src={image} alt="product" 
            className='card__image' />


            <div className="card">
                <h2 className="card__price">R${price}</h2>
                <h2 className="card__title">{title}</h2>
            </div>

            <button className='button__add-card'>carrinho</button>
            <button className='button__detalhes' onClick={()=> navigate(`./${data.id}` , {state : data.id})}>detalhes</button>

         </section>
       
    )
}

export default ProductCard

ProductCard.propTypes = {
    data: propTypes.shape({})
}.isRequired