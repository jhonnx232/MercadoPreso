
import propTypes from 'prop-types'
import "./ProductCard.css"
import { Link } from 'react-router-dom'

function ProductCard({ data }) {

    const {title , image , price  } = data
    

    function clicou(){
    
        return(
            <Link to={{ pathname: `/${data.id}`, state: { id : data.id } }}/>
        )
        
    }


    return(
        <section className='product-card' onClick={clicou}>
            <img 
            src={image} alt="product" 
            className='card__image' />


            <div className="card">
                <h2 className="card__price">R${price}</h2>
                <h2 className="card__title">{title}</h2>
            </div>

            <button className='button__add-card'>carrinho</button>

        </section>
    )
}

export default ProductCard

ProductCard.propTypes = {
    data: propTypes.shape({})
}.isRequired