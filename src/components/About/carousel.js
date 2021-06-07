import * as React from "react"
import bulmaCarousel from "bulma-carousel"

const AboutCarousel = () => {
  React.useEffect(() => {
    bulmaCarousel.attach("#carousel-about", {
      slidesToScroll: 1,
      slidesToShow: 3,
    })
  })

  return (
    <>
      <div
        id="carousel-about"
        class="carousel carousel-animated carousel-animate-slide"
      >
        <div class="carousel-container">
          <div class="carousel-item has-background is-active">
            <img class="is-background" src="" alt="" width="640" height="310" />
            <div class="title">Merry Christmas</div>
          </div>
          <div class="carousel-item has-background">
            <img
              class="is-background"
              src="https://wikiki.github.io/images/singer.jpg"
              alt=""
              width="640"
              height="310"
            />
            <div class="title">
              Original Gift: Offer a song with{" "}
              <a href="https://lasongbox.com" target="_blank">
                La Song Box
              </a>
            </div>
          </div>
          <div class="carousel-item has-background">
            <img
              class="is-background"
              src="https://wikiki.github.io/images/sushi.jpg"
              alt=""
              width="640"
              height="310"
            />
            <div class="title">Sushi time</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutCarousel
