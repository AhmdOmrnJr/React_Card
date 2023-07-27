import { Component } from 'react'
// import './App.css'
import Card from './component/cards/Card'


export default class App extends Component {

  render() {
    return (
      <>

      <div className="container min-vh-100 d-flex justify-content-center align-items-center " >
        <Card />
      </div>

      </>
    );
  }
}


