import { GROCERIES } from "./assets/images";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter/Counter";
import { ReadMore } from "./components/ReadMore/Readmore";
import { Spacer } from "./components/Spacer";
import {
  Container,
  Content,
  CounterCtn,
  ProductImage,
  ProductContent,
  DeliveryCtn,
  AboutCtn,
} from "./styles";

export const App = () => {
  return (
    <>
      <Container>
        <Content>
          <div className="ImgCtn">
            <ProductImage>
              <img src={GROCERIES} alt={"organic_amisa"} />
            </ProductImage>
          </div>

          <ProductContent>
            <div className="productName">
              <h2>Amisa</h2>
              <h3>Organic Spelt Crispy Spelt Flakes</h3>
              <div className="productWeightPrice">
                <p className="productWeight">250g</p>
                <p className="productPrice">&#163;2.99</p>
              </div>
            </div>
            <CounterCtn>
              <Counter />
              <Button>Update Cart</Button>
            </CounterCtn>
              <Spacer height={40} />
            <DeliveryCtn>
              <div className="delivery">
                <h3>Delivered in:</h3>
                <p>
                  <span>2 days</span>
                </p>
              </div>
              <div className="delivery">
                <h3>Next day delivery:</h3>
                <p>
                  <span>order by 2:00 PM</span>{" "}
                </p>
              </div>
              <div className="delivery">
                <h3>Delivery by:</h3>
                <p>stove</p>
              </div>
            </DeliveryCtn>
              <Spacer height={5} />
            <AboutCtn>
              <h2>About the product</h2>
              <Spacer height={10} />
              <ReadMore>
                Lightly toasted flakes drizzled in honey and barley malt
                Organic, Spelt & delightful, Drizzled in honey and barley malt,
                Wholegrain Spelt wheat* (93%), Honey* (5%), Barley Malt*, Sea
                Salt *=Certified organic ingredients
              </ReadMore>
            </AboutCtn>
          </ProductContent>
        </Content>
      </Container>
    </>
  );
};
