import * as React from "react"

const Roadmap = () => (
  <div class="timeline">
    <header class="timeline-header">
      <span class="tag is-medium is-primary">Start</span>
    </header>
    <div class="timeline-item">
      <div class="timeline-marker"></div>
      <div class="timeline-content">
        <p class="heading">Q3 2021</p>
        <p>Token Launch</p>
      </div>
    </div>
    <div class="timeline-item">
      <div class="timeline-marker is-image is-32x32">
        <img src="https://bulma.io/images/placeholders/32x32.png" />
      </div>
      <div class="timeline-content">
        <p class="heading">Q4 2021</p>
        <p>Timeline content - Can include any HTML element</p>
      </div>
    </div>
    <header class="timeline-header">
      <span class="tag is-primary">2022</span>
    </header>
    <div class="timeline-item">
      <div class="timeline-marker is-icon">
        <i class="fa fa-flag"></i>
      </div>
      <div class="timeline-content">
        <p class="heading">Q1 2022</p>
        <p>Timeline content - Can include any HTML element</p>
      </div>
    </div>
    <div class="timeline-header">
      <span class="tag is-medium is-primary">End</span>
    </div>
  </div>
)

export default Roadmap;
