import React from 'react';
import {Link} from 'react-router-dom';
import {Image} from 'react-bootstrap';
import PropTypes from 'prop-types'; 
import Icofont from 'react-icofont';

class CardItem extends React.Component {
	render() {
    	return (
    		<div className="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm ">
               <div className="list-card-image">
               
                 
                  <Link to={this.props.linkUrl}>
                  	<Image src={'img/uploaded/'+this.props.image} className={this.props.imageClass} alt={this.props.imageAlt} />
                  </Link>
               </div>
               <div className="p-3 position-relative">
                  <div className="list-card-body">
                     <h6 className="mb-1"><Link to={this.props.linkUrl} className="text-black">{this.props.title}</Link></h6>
                     {this.props.subTitle ? (
	                     <p className="text-gray mb-3">{this.props.subTitle}</p>
	                     )
	                     :''
	                 }
	                 {(this.props.time || this.props.price)? (
	                     <p className="text-gray mb-3 time">
	                     	{this.props.time ? (
		                     	<span className="bg-light text-dark rounded-sm pl-2 pb-1 pt-1 pr-2">
		                     		<Icofont icon='wall-clock'/> {this.props.time}
		                     	</span> 
		                     	)
		                     	:""
		                    }
						 
	                     </p>
	                   	):''
	                 }
                  </div>
              
               </div>
            </div>
		);
	}
}


CardItem.propTypes = {
  title: PropTypes.string.isRequired,
  imageAlt: PropTypes.string,
  image: PropTypes.string.isRequired,
  imageClass: PropTypes.string,
  linkUrl: PropTypes.string.isRequired,
  offerText: PropTypes.string,
  offerColor: PropTypes.string,
  subTitle: PropTypes.string,
  time: PropTypes.string,
  price: PropTypes.string,
  showPromoted: PropTypes.bool,
  promotedVariant: PropTypes.string,
  favIcoIconColor: PropTypes.string,
  rating: PropTypes.string,
};
CardItem.defaultProps = {
  	imageAlt:'',
    imageClass:'',
    offerText: '',
    offerColor: 'success',
	subTitle: '',
	time: '',
	price: '',
	showPromoted: false,
  	promotedVariant: 'dark',
	favIcoIconColor: '',
	rating: '',
}

export default CardItem;