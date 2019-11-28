import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem,
  CarouselIndicators
} from "reactstrap";
import {trending} from '../../common/constant/topTrending';
// core components

function CarouselSection() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);
  const onExiting = () => {
    setAnimating(true);
  };
  const onExited = () => {
    setAnimating(false);
  };
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === trending.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? trending.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  return (
    <>
      <div className="section" id="carousel">
          <Row className="justify-content-center m-0 p-0">
            <Col className="m-0 p-0">
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators
                  items={trending}
                  activeIndex={activeIndex}
                  onClickHandler={goToIndex}
                />
                {trending.map((item,index) => {
                  const key = `KEY${index}`;
                  return (
                    <CarouselItem
                      onExiting={onExiting}
                      onExited={onExited}
                      key={key}
                    >
                      <div className="cover">
                      <img src={item.src} alt={item.altText} />
                      <div className="overlay"></div>
                      </div>
                      <div class="rank d-none d-md-block">{index+1}</div>
                      <div className="content-area d-flex flex-row justify-content-start">
                        <div className="carousel-caption flex-column d-flex align-items-start">
                         
                          <div className="d-flex flex-row justify-content-start align-items-center">
                            <a className="comic-name" href="/">{item.comicName}</a>
                            <span className="chapter">Chương {item.chapter}</span>
                          </div>
                         <div className="chapter-name">{item.chapterName}</div>
                         <div className="date">{item.date}</div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
                <a
                  className="carousel-control-prev"
                  data-slide="prev"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    previous();
                  }}
                  role="button"
                >
                  <i class="fas carousel-control  fa-chevron-left"></i>
                </a>
                <a
                  className="carousel-control-next"
                  data-slide="next"
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    next();
                  }}
                  role="button"
                >
                  <i class="fas carousel-control fa-chevron-right"></i>
                </a>
              </Carousel>
            </Col>
          </Row>
      </div>
    </>
  );
}

export default CarouselSection;
