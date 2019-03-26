import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
          <li>Twitter</li>
        </ul>
      </div>
    );
  }
}

class NothingToDoHere extends React.Component {
  render() {
    return (
      <div classNam="cacatua">
        <table>
            <tr>
              <th>1</th>
              <th>2</th>
            </tr>
            <tr>
              <th>A</th>
              <th>B</th>
            </tr>
        </table>
          <hr/>
      </div>
    )
  }
}

render(<NothingToDoHere />, document.getElementById('cacatua'));
render(<ShoppingList />, document.getElementById('lista-compra'));
