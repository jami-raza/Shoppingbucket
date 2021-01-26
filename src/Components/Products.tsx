import React,{useState} from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux'
import {ProductItem} from '../global'
import {add} from '../Store/Reducer';
import {store} from '../Store/Store'

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
    media:{
        height:200,
        width:200,
    },
  });

 const Products = () => {
    const [search, setSearch] = useState('')
    const classes = useStyles();
    const products = useSelector((state: ProductItem[]) => state)
    
    //Serching items 


   const filterProducts = products.filter(product =>{
      return product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    })


    
    
    return(
      <div>
        <input type="text" placeholder="Search items" onChange={e => setSearch(e.target.value)} className="input"/>
        <div className="main">
          
        {filterProducts.map((product: ProductItem)=>
         <div  className="card" key={product.id}>
            <div className="imgBx" >
                <img alt={product.title} src={product.imageUrl} className={classes.media}/>
                </div>
                <div className="contentBx" >
                <h3>
                    {product.title}
                </h3>
                
                <h2 className="price">
                   {product.price}
                </h2>
                <div className="buy">
                <Button 
                disabled={product.added}
                onClick={()=> store.dispatch(add(product))}
                >
                    Add to basket
                </Button>
                </div>
                </div>

         </div> 
         )}
        </div>
        </div>
       
    )


}

export default Products;