import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  clickButton = ({target: {name}}) => {
    // приймається option це (event.target.name) з FeedbackOptions;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return `${Math.ceil((this.state.good * 100) / this.countTotalFeedback())}%`;
  };

  render() {
    const { good, bad, neutral } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.clickButton}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> : <Notification message="There is no feedback"/>}
        </Section>
      </div>
    );
  }
}

export default App;
