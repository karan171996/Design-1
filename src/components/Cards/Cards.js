import React, { Component } from 'react';
import './Card.css';
const PostsData = [
  {
    
    "title": "Super Matteress Blue-114 Canvas Shoes For Men ",
    "text": "Grey Canvas Solid Size(7,8,9,10)",
    "image": "http://www.simpleimageresizer.com/_uploads/photos/81828e96/1_245x336.jpeg",
    "price": " 850"
  },
  {
    
    "title": "ADIDAS GLISSADE Outdoor Shoes For Men ",
    "text": "Black  Brown Fabric, Fabricated Size(7,9)",
    "image": "http://www.simpleimageresizer.com/_uploads/photos/81828e96/2_245x336.jpeg",
    "price": "3000 "
  },
  {
    
    "title": "ADIDAS PUARO M Running Shoes For Men ",
    "text": "Blue ,Fabric Laced ,Size(7, 8, 10)",
    "image": "http://www.simpleimageresizer.com/_uploads/photos/81828e96/8_245x336.jpeg",
    "price": " 3500"
  },
  {
   
    "title": "Beonza Featherweight Series Running Shoes For Men",
    "text": "Blue ,Fabricated Mesh , Size(6)",
    "image": "http://www.simpleimageresizer.com/_uploads/photos/81828e96/4_245x336.jpeg",
    "price": " 2900"
  },
  {
    
    "title": "Nike NIKE REVOLUTION 4 Running Shoes For Men ",
    "text": "Grey, Fabric, Size(7,8)",
    "image": "http://www.simpleimageresizer.com/_uploads/photos/81828e96/7_245x336.jpeg",
    "price": " 2050"
  },
  {
    
    "title": "BRUTON CUBIC_1 Casuals For Men(Red) ",
    "text": " 1inch Heel Height, Size(9,10)",
    "image": "http://www.simpleimageresizer.com/_uploads/photos/81828e96/6_245x336.jpeg",
    "price": " 750"
  },
  {

    "title": "World Wear Footwear Brown-397 For Men  (Brown)",
    "text": "Brown , Canvas, Size(8,9)",
    "image": "http://www.simpleimageresizer.com/_uploads/photos/81828e96/5_245x336.jpeg",
    "price": " 4000"
  },
  {

    "title": "Provogue Genuine Leather Sneakers For Men  (Tan)",
    "text": "Tan, Laced, Size(7,8,9,10)",
    "image": "http://www.simpleimageresizer.com/_uploads/photos/81828e96/3_245x336.jpeg",
    "price": " 900"
  },
]


// Start App

class Cards extends Component {
  constructor() {
    super();

    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    this.setState({
      posts: PostsData
    });
  }


  render() {
    return <div>
           <h1 className="tag">The Shoe Shop</h1>
        {
          Object
            .keys(this.state.posts)
            .map(key => <Card key={key} index={key} details={this.state.posts[key]} />)
        }
      </div>
    
  }
}

class Button extends Component {
  render(){
    return(
      <div className="row">
      <div className="col-6" >
         <i className="fa fa-shopping-cart" aria-hidden="true" style={{"marginLeft":"20px"}}></i>
         <i className="fa fa-heart-o" aria-hidden="true"style={{"marginLeft":"45px"}}></i>
         <i className="fa fa-bolt" aria-hidden="true" style={{"float":"right","marginRight":"20px"}}>{this.props.price}</i>
         </div>
      </div>

      
        
      
    )
  }
}

class Image extends Component {
  render() {
    const { image } = this.props;
    var style = {
      backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} className="card-image"/>
        
    )
  }
}
class CardBody extends Component {
  render(){
    return(
      <div className="container">
        <h4><b>{this.props.title}</b></h4>
        <p>{this.props.text}</p>
        <Button price={this.props.price}/>
      </div>
    )
  }
} 

class Card extends Component {
  render(){
    return(
      <article className="card">
       <Image image={this.props.details.image} />
       <CardBody title={this.props.details.title} text={this.props.details.text} price={this.props.details.price}/>
      </article> 
   
  
    )
  }
}

export default Cards;