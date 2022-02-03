import { Link } from 'react-router-dom'

export const ProductFull = (props) => {
    const { id, title, description, image, price, gender_id, category_id } = props

    return (
        <div className="row m-3">
            <Link to="/" className="btn btn-outline-dark mt-auto">retour</Link>
            <div className="col m-3">
                <div className="card h-100">
                    <img className="card-img-top" src={image} alt="..." />
                    <div className="card-body p-4">
                        <div className="text-center">
                            <h5 className="fw-bolder">{title}</h5>
                            {price}€
                        </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <p>{gender_id} - {category_id}</p>
                    </div>
                    <div>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <Link to="/" className="btn btn-outline-dark mt-auto">retour</Link>
        </div>
    )
    
}