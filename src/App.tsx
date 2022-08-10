import { GROCERIES } from "./assets/images";
import { Container, Content, ImageCtn, OrderContent} from "./styles";


export const App = () => {
  return (
    <>
      <Container>
          <Content>
           <ImageCtn>
              <img src={GROCERIES} alt={"organic_amisa"}/>
           </ImageCtn>
            <OrderContent>
              
            </OrderContent>
          </Content>
      </Container>
    </>
  );
}


