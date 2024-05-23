import React from 'react';
import './AnimatedCursor.css';

class AnimatedCursor extends React.Component {
  state = {
    mouseX: 0,
    mouseY: 0,
    isHovering: false,
  };

  componentDidMount() {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.querySelectorAll('.hover').forEach(item => {
      item.addEventListener('mouseenter', this.handleMouseEnter);
      item.addEventListener('mouseleave', this.handleMouseLeave);
    });
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.querySelectorAll('.hover').forEach(item => {
      item.removeEventListener('mouseenter', this.handleMouseEnter);
      item.removeEventListener('mouseleave', this.handleMouseLeave);
    });
  }

  handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    this.setState({ mouseX: clientX, mouseY: clientY });
  };

  handleMouseEnter = () => {
    this.setState({ isHovering: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovering: false });
  };

  render() {
    const { mouseX, mouseY, isHovering } = this.state;
    const cursorClasses = `animated-cursor ${isHovering ? 'hover' : ''}`;
    return (
      <div
        className={cursorClasses}
        style={{
          left: mouseX + 'px',
          top: mouseY + 'px',
        }}
      />
    );
  }
}

export default AnimatedCursor;
