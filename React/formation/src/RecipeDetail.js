import {Card, CardBody, CardImg, CardText, CardTitle} from 'reactstrap'
import React, { Component } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons"

class RecipeDetail extends Component{
    render(){
    let {recipe} = this.props;

        return (
        <Card>
            <CardImg top width= "100%" src={recipe.picture} alt="CardImg"/>
            <CardBody>
                <CardTitle>{recipe.name}</CardTitle>
                <CardText>{recipe.description}</CardText>
                <button onClick={this.props.delete(recipe.id)}><FontAwesomeIcon icon={faTrash}/></button>
            </CardBody>

        </Card>
        )
    }
}

export default RecipeDetail;
