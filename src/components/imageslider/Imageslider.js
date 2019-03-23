import React, { Component } from 'react';
import waterslider from './waterslider.jpg';
import waterslider2 from './waterslider2.jpeg';
import waterslider3 from './waterslider3.jpg';



class Content extends Component {
  render() {
    return (
      <imageslider>
        {/* image slider code */}
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
        <img src={waterslider} class="d-block w-100" alt="..." height="500px"/>
    </div>
    <div class="carousel-item">
      <img src={waterslider2} class="d-block w-100" alt="..." height="500px"/>
    </div>
    <div class="carousel-item">
      <img src={waterslider3} class="d-block w-100" alt="..." height="500px"/>
    </div>
  </div>
</div>
     </imageslider>
    );
  }
}

export default Content;
