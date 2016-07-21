const React = require('react');
module.exports = props => {
  return (
      <svg version="1.1" width={props.width} viewBox="0 0 184 166">
          <g transform="translate(92 83)">
          <circle fill={props.color} r="16" />
          <g fill="none" stroke={props.color} stroke-width="8">
              <ellipse rx="84" ry="32" />
              <ellipse rx="84" ry="32" transform="rotate(120)" />
              <ellipse rx="84" ry="32" transform="rotate(60)" />
          </g>
          </g>
      </svg>
  );
};

module.exports.propTypes = {
  color: React.PropTypes.string,
  width: React.PropTypes.string
};

module.exports.defaultProps = {
  width: '500px',
  color: '#000'
};
