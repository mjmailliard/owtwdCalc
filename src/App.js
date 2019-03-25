import React, { Component } from 'react';
import { white, black } from 'ansi-colors';

class App extends Component {
  constructor(){
    super()
      this.state = {
        hero0: 0,
        hero1: '0',
        hero2: '0',
        hero3: '0',
        weapon0: '0',
        weapon1: '0',
        weapon2: '0',
        weapon3: '0',
        highestMission: '0',
      }
  }
 
  render() {
    const numbers =  [parseInt(this.state.hero1), parseInt(this.state.hero2), parseInt(this.state.hero3), parseInt(this.state.weapon1), parseInt(this.state.weapon2), parseInt(this.state.weapon3)]
    const power = Math.round((numbers.reduce((acc, cur) => acc + cur) /6)/10)
    const lowerRange = parseInt(power - 2.5)
    const upperRange = parseInt(power + 2.5)
    return (
      <div className="App">
        <h1>Our World Power Calculator</h1>
        <p>Instructions:</p>
        <ol>
          <li>Ignore your highest power hero and your highest power weapon.</li>
          <li>Enter your next 3 highest power heroes and 3 highest power weapons below.</li>
          <li>Enter (or guess) your highest mission level completed.</li>

        </ol>
        
        <p>
          Heroes:<br/>
          {/* <input type='text' name='hero0' placeholder='hero strength' onChange={e => this.setState({hero0: e.target.value})} /><br/> */}
          <input type='number' name='hero1' placeholder='hero strength' onChange={e => this.setState({hero1: e.target.value})} /><br/>
          <input type='number' name='hero2' placeholder='hero strength' onChange={e => this.setState({hero2: e.target.value})} /><br/>
          <input type='number' name='hero3' placeholder='hero strength' onChange={e => this.setState({hero3: e.target.value})} /><br/>
        </p>
      <p>
        Weapons:<br/>
        {/* <input type='text' name='weapon0' placeholder='hero weapon' onChange={e => this.setState({weapon0: e.target.value})} /><br/> */}
        <input type='number' name='weapon1' placeholder='weapon strength' onChange={e => this.setState({weapon1: e.target.value})} /><br/>
        <input type='number' name='weapon2' placeholder='weapon strength' onChange={e => this.setState({weapon2: e.target.value})} /><br/>
        <input type='number' name='weapon3' placeholder='weapon strength' onChange={e => this.setState({weapon3: e.target.value})} /><br/>

      </p>
      <p>
        <input type='number' name='highestMission' placeholder='highest mission' onChange={e => this.setState({highestMission: e.target.value})} /><br/>
      </p>
      <p>
        Your Player Power is {power}<br/>
        You should see missions that range from {lowerRange} to {parseInt(this.state.highestMission) + 1}.<br/>
        Your "Easy" missions will range from {lowerRange} to {upperRange}.<br/>
        Your "Hard" missions will range from {parseInt(this.state.highestMission) - 4} to {parseInt(this.state.highestMission) + 1}
      </p>
      <p>
        Here is a <a href="https://www.reddit.com/r/OurWorldTWD/comments/axl4d3/lets_talk_about_difficulty/" target='_blank' rel="noopener noreferrer">link</a> to the Reddit post for more details.
      </p>
     </div>
    );  
  }
}

export default App;
