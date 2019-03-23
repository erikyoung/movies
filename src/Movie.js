/* Core */
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle} from 'reactstrap'; 
import MoviesList from './MoviesList'; 




export default class Movie extends Component {
  render() {
    return (
    <Container>
    <Row>
	    <Col xs="6">
	     <Card>
	     	 <CardImg top width="100%" src={"https://image.tmdb.org/t/p/w500" + this.props.poster_path} />
	        <CardBody>
	          <CardTitle>{this.props.title}</CardTitle>
	         
	          <CardText>{this.props.overview}</CardText>
	          
	        </CardBody>
	     </Card>
	    </Col>

	    <Col xs="6">
	     <Card>
	     	 <CardImg top width="100%" src={"https://image.tmdb.org/t/p/w500" + this.props.poster_path} />
	        <CardBody>
	          <CardTitle>{this.props.title}</CardTitle>
	         
	          <CardText>{this.props.overview}</CardText>
	          
	        </CardBody>
	     </Card>
	    </Col>
    </Row>
    </Container>
    );
  }
}
