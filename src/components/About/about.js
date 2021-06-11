import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
const About = () => (
  <div>
    <section class="hero is-fullheight">
      <div class="hero-body container is-fluid">
        <div class="columns ">
          <div class="column is-full">
            <div class="rows-wrap">
              <div class="column is-full has-text-justified">
                <p class="title is-size-1">About</p>
              </div>
            </div>
            <div class="columns ">
              <div class="column is-6">
                <StaticImage
                  class="image"
                  src="../../images/com_driven_640.png"
                  alt="adobe-stock-std-lic"
                />
              </div>
              <div class="column is-6 has-text-centered">
                <div class="columns ">
                  <div class="column is-full">
                    <div id="feature-1" class="title is-size-3">
                      Community Driven
                    </div>
                  </div>
                </div>
                <div class="columns ">
                  <div class="column is-full">
                    <div class="subtitle">
                      <p>
                        <span class="title is-size-5">Space Coin</span> is a
                        community driven transaction protocol system. The growth
                        of this token is based on the fair participation of
                        every one interested in it.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="columns  ">
              <div class="column is-6 has-text-centered">
                <div class="columns ">
                  <div class="column is-full">
                    <div id="feature-2" class="title is-3">
                      Volume Driven Fee
                    </div>
                  </div>
                </div>
                <div class="columns ">
                  <div class="column is-full">
                    <div class="subtitle">
                      <p>
                        Volume is one of the most important declarative of any token's price
                        action. Hence we have focussed on a reward mechanism that focusses majorly on
                        the volume of transactions and the amount of tokens held by an individual. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <StaticImage
                class="image"
                src="../../images/Rewards_640.png"
                alt="adobe-stock-std-lic"
              />
            </div>
            <div class="columns  ">
              <StaticImage
                class="image"
                src="../../images/burn_once_orange_640.png"
                alt="adobe-stock-std-lic"
              />
              <div class="column is-6 has-text-centered">
                <div class="columns ">
                  <div class="column is-full">
                    <div id="feature-3" class="title is-3">
                      Burn Once - Supply All Strategy
                    </div>
                  </div>
                </div>
                <div class="columns ">
                  <div class="column is-full">
                    <div class="subtitle">
                      <p>Any tokens that are left after the initial offerings and airdrops are burned to promote a fair community participation. Post this 
                        no more burns are allowed. The idea behind is that a higher circulating volume promotes higher rewards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

export default About
