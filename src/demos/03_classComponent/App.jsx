import React, { Component } from 'react';

class UserProfile extends Component {
  constructor(props) {
    super(props);
    // ✅ 1. State
    this.state = {
      name: this.props.name,  // from props
      age: 25,
      clicks: 0
    };

    // ✅ 2. Binding event handler
    this.handleClick = this.handleClick.bind(this);

    // ✅ 3. Creating a ref
    this.inputRef = React.createRef();
  }

  // ✅ Lifecycle method: runs after component mounts
  componentDidMount() {
    console.log('Component Mounted');
    this.inputRef.current.focus(); // focus input when component mounts
  }

  // ✅ Lifecycle method: runs after state or props update
  componentDidUpdate(prevProps, prevState) {
    if (prevState.clicks !== this.state.clicks) {
      console.log(`Clicks updated to ${this.state.clicks}`);
    }
  }

  // ✅ Lifecycle method: cleanup before unmount
  componentWillUnmount() {
    console.log('Component will unmount');
  }

  // ✅ New: Control re-rendering
  shouldComponentUpdate(nextProps, nextState) {
    // Only re-render if clicks or age change
    if (
      this.state.clicks !== nextState.clicks ||
      this.state.age !== nextState.age
    ) {
      return true; // allow re-render
    }
    return false; // prevent unnecessary re-render
  }

  // ✅ Event handler
  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  // ✅ Another state update using arrow function (no bind needed)
  incrementAge = () => {
    this.setState({ age: this.state.age + 1 });
  }

  render() {
    console.log('Render called');
    return (
      <div style={{ border: "1px solid gray", padding: "10px", width: "300px" }}>
        <h2>User Profile</h2>
        <p>Name: {this.state.name}</p>
        <p>Age: {this.state.age}</p>
        <p>Button Clicks: {this.state.clicks}</p>

        {/* ✅ Event handlers */}
        <button onClick={this.handleClick}>Click Me</button>
        <button onClick={this.incrementAge}>Increase Age</button>

        {/* ✅ Using ref */}
        <input ref={this.inputRef} placeholder="Focus on mount" />

        {/* ✅ Props example */}
        <p>Prop Message: {this.props.message}</p>
      </div>
    );
  }
}

// Usage
export default function App() {
  return (
    <UserProfile name="Ramu" message="Welcome to React Class Component!" />
  );
} 
