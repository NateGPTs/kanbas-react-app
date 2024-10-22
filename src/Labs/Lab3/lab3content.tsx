import React from "react";
import VariableAndConstants from "./VariableAndConstants";
import BooleanVariables from "./BooleanVariables";
import VariableTypes from "./VariableTypes";
import Add from "./Add";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInLine";
import AddPathParameters from "./AddParamaters";
import AddingAndRemovingToFromArrays from "./AddingAndRemovingToFromArrays";
import ForLoops from "./ForLoops";
import MapFunction from "./MapFunction";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";
import JsonStringify from "./JsonStringify";
import House from "./House";
import TodoItem from "./todo/TodoItem";
import TodoList from "./todo/TodoList";
import Spreading from "./Spreading";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import DestructingImports from "./DestructingImports";
import Classes from "./Classes";
import Styles from "./Styles";
import TOC from "../TOC";



export default function Lab3() {
    return (
      <div id="wd-lab3">
        <h2>Lab 3</h2>
        <Add a={0} b={1} />
        <VariableAndConstants />
        <VariableTypes />
        <BooleanVariables />
        <IfElse />
        <TernaryOperator/>
        <ConditionalOutputIfElse/>
        <ConditionalOutputInline/>
        <AddPathParameters/>
        <AddingAndRemovingToFromArrays/>
        <ForLoops />
        <MapFunction />
        <FindFunction />
        <FilterFunction />
        <JsonStringify />
        <House />
        <TodoItem />
        <TodoList />
        <Spreading />
        <Destructing />
        <FunctionDestructing />
        <DestructingImports />
        <Classes />
        <Styles />
        <TOC />


      </div>
    );
  }
  