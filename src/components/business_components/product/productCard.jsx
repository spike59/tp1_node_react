import { Link } from 'react-router-dom'

export const ProductCard = (props) => {
    const { id, title, image, price, gender_id, category_id } = props
    let img_url
    !image.startsWith("http")?img_url = "assets/images/" + image :img_url = image
    // if (!image.startsWith("http")){
    //     img_url = "assets/images/" + image
    // }else{
    //     img_url = image
    // }

    return (
        <div className="col mb-5">
            <div className="card h-100">
                <img className="card-img-top" src={img_url} alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{title}</h5>
                        {price}€
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <p>{gender_id} - {category_id}</p>

                    <div className="text-center">
                        <Link to={`product/${id}`} className="btn btn-outline-dark mt-auto">details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}