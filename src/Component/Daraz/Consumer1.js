import React, {Component} from "react";
import {Consumer} from "../store11/new";
import Child from "./Daraz";
export default (props)=> {
    return (
        <Consumer>
            {
                ({dispatch, uneeb}) => (
                    <Child children={props.children} dispatch={dispatch} uneeb={uneeb}/>
                )
            }
        </Consumer>
    )
}