var React = require('react');
var ReactDOMServer = require('react-dom/server');

var MyComponent = React.createClass({
    render: function() {
        <div>
            <h1>My Component</h1>
            <p>This is a component render</p>
        </div>
    }
});

module.exports.MyComponent = MyComponent;