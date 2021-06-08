import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from "react"

const Team = () => (
  <>
    <section class="hero">
      <div class="hero-body container is-fluid">
        <div class="columns ">
          <div class="column is-full">
            <p class="title is-size-1">Our Team</p>
          </div>
        </div>
      </div>
      <div class="rows-wrap  has-text-centered">
        <div class="column is-one-fifth">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">Founder</p>
                </div>
              </div>

              <div class="content rows ">
                <div class="column">
                  <a>
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>

                <div class="column">
                  <a>
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </div>
                <div class="column">
                  <a>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </div>
                <div class="column">
                  <a>
                    <FontAwesomeIcon icon={["fab", "discord"]} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column is-one-fifth">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  alt="Placeholder image"
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">John Smith</p>
                  <p class="subtitle is-6">Co-Founder</p>
                </div>
              </div>

              <div class="content rows ">
                <div class="column">
                  <a>
                    <FontAwesomeIcon icon={["fab", "github"]} />
                  </a>
                </div>

                <div class="column">
                  <a>
                    <FontAwesomeIcon icon={["fab", "twitter"]} />
                  </a>
                </div>
                <div class="column">
                  <a>
                    <FontAwesomeIcon icon={["fab", "linkedin"]} />
                  </a>
                </div>
                <div class="column">
                  <a>
                    <FontAwesomeIcon icon={["fab", "discord"]} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">John Smith</p>
            <p class="subtitle is-6">@johnsmith</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a>{" "}
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
      </div>
    </div> */}
    </section>
  </>
)

export default Team
