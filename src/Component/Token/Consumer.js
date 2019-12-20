import React, {Component} from "react";
import {Consumer} from "../../store/index";
import Child from "./Token";
export default (props)=> {
    return (
        <Consumer>
            {
                ({dispatch, word,name}) => (
                    <Child children={props.children} dispatch={dispatch} word={word} name={name}/>
                )
            }
        </Consumer>
    )
}