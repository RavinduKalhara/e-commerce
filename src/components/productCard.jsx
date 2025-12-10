
export default function ProductCard(props) {

    console.log(props.description);

    return (
        <div>
            <img src={props.image} alt={props.name} />
            <span>{props.name}</span>
            <span>price {props.price}/= </span>
            <h1>{props.description}</h1>
        </div>
    )
}