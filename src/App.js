import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
class App extends Component {
  //Sets initial state of the application
  state = {
    friends: friends.sort(() => Math.random() - 0.5),
    guessed: [],
    score: 0
  };
  //pushes character to guessed array when selected
  guess = character => {
    let guessed = this.state.guessed;
    if (guessed.indexOf(character) === -1) {
      this.setState(
        {
          guessed: guessed.concat(character),
          score: this.state.score + 1,
          friends: friends.sort(() => Math.random() - 0.5)
        },
        () => {}
      );
    } else {
      alert(`Buzz Kill! You Lose`);
      this.setState({
        score: 0,
        guessed: [],
        friends: friends.sort(() => Math.random() - 0.5)
      });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("Update complete!");
    if (this.state.score === 10) {
      this.sweetVictory();
    }
  }

  sweetVictory = () => {
    alert(`Tight, You Win!`);
    this.setState({
      score: 0,
      guessed: [],
      friends: friends.sort(() => Math.random() - 0.5)
    });
  };
  render() {
    return (
      <Wrapper>
        <Title>X-Treme Memory Game || Score: {this.state.score}</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            sweetVictory={this.sweetVictory}
            guess={this.guess}
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
