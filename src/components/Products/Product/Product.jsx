import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@mui/material";
import {ReactComponent as ReactCart} from '../../../image/add.svg';


const Product = ({ product, handleAddToCart }) => {
  const onAddToCart = () => handleAddToCart(product.id, 1);

  return (
    <Card className={"root"}>
      <CardMedia
        className={"media"}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className={"cardContent"}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
          component="p"
        />
      </CardContent>
      <CardActions disableSpacing className={"cardActions"}>
        <IconButton aria-label="Add to Cart" onClick={onAddToCart}>
        <ReactCart height={25} width={25}/>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;


