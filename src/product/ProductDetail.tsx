import React, { FunctionComponent, useEffect, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Product from './product';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Typography, Button } from '@material-ui/core';
import ShoppingContext from '../contexts/ShoppingContext';
import CartItem from '../contexts/CartItem';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

type ProductDetailProps = {
    productId: number,
};

const ProductDetail: FunctionComponent<ProductDetailProps> = ({productId}) => {
    const classes = useStyles();
    const cartManager = useContext(ShoppingContext);

    const [productDetail, setProductDetail] = useState<Product|undefined>(undefined);

    useEffect(() => {
        console.log("ProductDetail is ready.");
        console.log(`Loading product Details for ${productId}`);

        let product = new Product();
        product.productId = productId;
        product.productName = "Coffee";
        product.description = "Typical morning beverage that contains caffiene";
        product.price = 3.23;

        setProductDetail(product);
    }, [productId]);

    const addToCart = (productToAdd: number, productDescr: string) => {
        console.log(`Adding product ${productToAdd} to cart`);
        let newCartItem: CartItem = { key: productToAdd, name: productDescr };
        cartManager?.addCartItem(newCartItem);
    }

    return productDetail ? (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Product Details
                </Typography>
                <Typography variant="h5" component="h2">{productDetail?.productName}</Typography>
                <Typography className={classes.pos} color="textSecondary">{productDetail?.description}</Typography>
                <Typography variant="body2" component="p">$ {productDetail?.price} </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => addToCart(productDetail?.productId, productDetail?.productName)}>Add to Cart</Button>
            </CardActions>
        </Card>
    ) : (
        <div>Loading....</div>
    );
}

export default ProductDetail;