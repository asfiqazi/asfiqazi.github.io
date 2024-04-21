import React from 'react';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <iframe
          src="/EmbdDemo/index.html" // Replace this with your HTML page URL
          title="Embedded Page"
          width="100%"
          height="1300"
          frameBorder="0"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Demo;
