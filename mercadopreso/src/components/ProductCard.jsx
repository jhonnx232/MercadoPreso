import propTypes from 'prop-types'
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'

function ProductCard({ data, handleAddToCart }) {
    const navigate = useNavigate()
    const { title, image, price } = data

    return (
        <section className='product-card'>
            <div className="card" onClick={() => navigate(`./${data.id}`, { state: data.id })}>
            <img
                src={image} alt="product"
                className='card__image' />

                <h2 className="card__price">R${price}</h2>
                <h2 className="card__title">{title}</h2>
            </div>

            <button className='button__add-card' onClick={() => handleAddToCart(data)}>carrinho</button>
        </section>
    )
}

ProductCard.propTypes = {
    data: propTypes.shape({}).isRequired,
    handleAddToCart: propTypes.func.isRequired
}

export default ProductCard
