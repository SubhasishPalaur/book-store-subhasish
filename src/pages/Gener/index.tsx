
import styled from "styled-components"
import pattern from "../../assets/Pattern.svg"
import fiction from "../../assets/Fiction.svg"
import drama from "../../assets/Drama.svg"
import history from "../../assets/History.svg"
import humour from "../../assets/Humour.svg"
import politics from "../../assets/Politics.svg"
import philosophy from "../../assets/Philosophy.svg"
import { GenerButton } from "../../components/GenerButton"

const gener_list = [
    {
        name: 'Fiction',
        logo: fiction,
    },
    {
        name: 'Drama',
        logo: drama,
    },
    {
        name: 'History',
        logo: history,
    },
    {
        name: 'Humour',
        logo: humour,
    },
    {
        name: 'Politics',
        logo: politics,
    },
    {
        name: 'Philosophy',
        logo: philosophy,
    }
]

const Gener = () => {
  return <Container>
    <HeaderPattern>
      <TitleText>Gutenberg Project</TitleText>
      <Ptag>
        A social cataloging website that allows you to
        freely search its database of books,
        annotations, and reviews.
      </Ptag>
    </HeaderPattern>
    <ListContainer>{gener_list.map((val)=>{
        return <GenerButton details={val}/>
    })}</ListContainer>
  </Container>;
};

export default Gener;

const Container = styled.div`
  height: 100vh;
  background-color: #F8F7FF;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px; 
  padding: 24px 150px; 
  @media (max-width: 768px) {
    padding: 24px 0; 
  }
  @media (max-width: 500px) {
    padding:  24px; 
    display: flex;
    flex-direction: column; 
  }
`;

const HeaderPattern = styled.header`
  display: flex;
  flex-direction: column;
  background-image: url(${pattern});
  background-size: cover;
  background-position: center;
  color: white;
  padding: 0 150px; 
  @media (max-width: 768px) {
    padding: 0 20px; 
  }
`;

const TitleText = styled.h1`
  font-size: 48px;
  font-family: Montserrat;
  color: #5E56E7;
  margin-bottom: 0;
`;

const Ptag = styled.p`
  font-size : 16px;
  font-family: Montserrat;
  color: #A0A0A0
`

