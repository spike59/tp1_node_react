import { Link } from 'react-router-dom'

export const ProductFull = (props) => {
    const { id, title, description, image, price, gender_id, category_id } = props
    let img_url
    !image.startsWith("http") ? img_url = window.location.origin.toString() + "/assets/images/" + image : img_url = image

    return (
        <div className="container">
            <div className="row m-3">
                <Link to="/" className="btn btn-outline-dark mt-auto">retour</Link>
                <div className="col-12">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <img src={img_url} alt="" />
                </div>
                <div className="col-6">
                    <pre>{description}</pre>
                    <div>{price}</div>
                    <a href="#" className="btn btn-outline-dark"> add to cart</a>
                </div>
            </div>

            <p>{gender_id} - {category_id}</p>
            <Link to="/" className="btn btn-outline-dark mt-auto">retour</Link>

        </div>
    )

}