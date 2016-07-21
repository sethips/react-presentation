const React = require("react");
const ReactDOM = require('react-dom');
const HEIGHT = 44;

import {
  Appear,
  Layout,
  Text
} from "spectacle";

import Radium from "radium";


class Event {
  constructor(config={}) {
    this.label = config.label;
    this.start = new Date(config.start);
    this.end = new Date(config.end);
  }

  get length() {
    return this.end - this.start;
  }

  valueOf() {
    return this.start;
  }

  get startLabel() {
    return this.start.toLocaleDateString('en-GB', {  
      day : 'numeric',
      month : 'short',
      year : 'numeric'
    }).split(' ').join(' ');
  }

  get endLabel() {
    return this.end.toLocaleDateString('en-GB', {  
      day : 'numeric',
      month : 'short',
      year : 'numeric'
    }).split(' ').join(' ');
  }
}

@radium
class TimelineEvent extends React.Component {

  render() {
    return (
      <div
        style={{ 
          width: this.props.scale(this.props.event.length) + 'px',
          marginTop: (HEIGHT * this.props.i) + 'px'
        }}
        className="timeline-event">
        <Text
          textAlign="left"
          textSize="18px"
          padding="5px">{this.props.event.label}</Text>
        <Text
          style={{ float: 'left', paddingLeft: '5px' }}
          textSize="13px"
          textColor="quartenary">{this.props.event.startLabel}</Text>
        
      </div>
    );
  }
}

@radium
class Timeline extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      lastEvent: new Event(),
      width: 0
    };
  }

  componentDidMount() {
    this.setEvents(this.props.events);
    this.setState({ width: ReactDOM.findDOMNode(this).offsetWidth });
  }

  setEvents(events) {
    events = events
      .map(event => new Event(event))
      .sort();
    this.setState({ lastEvent: this.getLastEvent(events) });
    this.setState({ events });
  }

  get firstEvent() {
    return this.state.events[0];
  }

  /**
   * @returns {Event} - the event that finishes last
   */
  getLastEvent(events) {
    let lastEvent = events[events.length - 1];
    /**
     * loop backwards because its already sorted and its more
     * likely that an event that starts later will finish later
     */
    for(let i = events.length - 1; i >= 0; i--) {
      if(events[i].end > lastEvent.end) {
        lastEvent = events.length[i];
      }
    }
    return lastEvent;
  }

  get range() {
    return this.state.lastEvent.end - this.firstEvent.start;
  }

  /**
   * @param {Number} len - time difference
   * @returns {Number} px
   */
  scale(len) {
    const ratio = len / this.range;
    return ratio * this.state.width;
  }

  timelineElements() {
    return this.state.events.map((event, i) => 
      (
        <Appear key={i} fid={i}>
          <TimelineEvent
            scale={this.scale.bind(this)}
            event={event}
            i={i}/>
        </Appear>
      )
    );
  }

  render() {
    return (<Layout>{this.timelineElements()}</Layout>);
  }
}


module.exports = Timeline;
