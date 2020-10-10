import { ProductItem } from './global'

  const INITIAL_STATE: ProductItem[] = [
    {
      id: "123",
      title: "Blue t-shirt",
      description: "No fancy sizing charts here, one t-shirt size to rule them all",
      imageUrl: "https://www.pngitem.com/pimgs/m/244-2441637_campus-shoes-png-transparent-png.png",
      price: 399
    },
    {
      id: "456",
      title: "Yellow t-shirt",
      description: "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
      imageUrl: "https://www.freepngimg.com/thumb/shoes/28530-3-nike-shoes-transparent.png",
      price: 499
    },
    {
      id: "789",
      title: "Red t-shirt",
      description: "The only product on our site that might actually be worth buying",
      imageUrl: "https://www.freepngimg.com/thumb/shoes/3-2-shoes-transparent.png",
      price: 799
    }
  ]
  
  export { INITIAL_STATE }