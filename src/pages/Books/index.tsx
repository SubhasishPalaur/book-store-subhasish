


import  { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { useParams } from "react-router-dom";

// Styled components for the Books layout
const Container = styled.div`
  padding: 20px 150px;
  background-color: #f8f7ff;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Heading = styled.h1`
  color: #6b52ae;
  font-size: 2rem;
  font-family: Montserrat;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const BackArrow = styled.span`
  cursor: pointer;
  font-size: 1.5rem;
`;

const SearchContainer = styled.div`
  width: 100%;
  margin: 20px 0;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  box-sizing: border-box; /* Ensure padding and border are included in the total width */
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;

`;

type Book = {
  title: string;
  authors: [{name: string}];
  formats: { 'image/jpeg': string };
};

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [globalBooks, setGlobalBooks] = useState<Book[]>([]);

  const { page } = useParams();

  const getData = async () => {
    try {
      const response = await fetch(`http://skunkworks.ignitesol.com:8000/books?topic=${page}`);
      const data = await response.json();
      console.log(data, page);
      setGlobalBooks(data.results)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [page]); 

  return (
    <Container>
      <Heading>
        <BackArrow>&larr;</BackArrow>
        {page}
      </Heading>
      <SearchContainer>
        <SearchBar
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <GridContainer>
        {globalBooks.map((book, index) => {
          return <Card key={index} title={book.title} authors={book.authors[0]} formats={book.formats} />
        })}
      </GridContainer>
    </Container>
  );
};

export default Books;

