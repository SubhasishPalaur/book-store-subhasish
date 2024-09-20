


import  { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { useParams } from "react-router-dom";
// Sample array of book objects
const books = [
  { title: "THE OLD MAN AND THE SEA", author: "Charles Dickens", image: "image_url_1" },
  { title: "THE BELIAL STONE", author: "R.D Brady", image: "image_url_2" },
  { title: "REACTION - THE END OF IRON AGE", author: "Seth M Baker", image: "image_url_3" },
  { title: "GREAT EXPECTATIONS", author: "Charles Dickens", image: "image_url_4" },
  { title: "A CHRISTMAS CAROL", author: "Charles Dickens", image: "image_url_5" },
  { title: "HARRY POTTER AND THE HALF BLOOD PRINCE", author: "J.K Rowling", image: "image_url_6" },
  { title: "OLIVER TWIST", author: "Charles Dickens", image: "image_url_7" },
  { title: "THE ADVENTURES OF TOM SAWYER", author: "Mark Twain", image: "image_url_8" },
  { title: "PERCY JACKSON AND THE OLYMPIANS", author: "Rick Riordan", image: "image_url_9" },
  { title: "THE BEASTS OF THE BLACK HOLE", author: "Paul Parker", image: "image_url_10" },
  { title: "A TALE OF TWO CITIES", author: "Charles Dickens", image: "image_url_11" },
];

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

const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [globalBooks, setGlobalBooks] = useState([])
  // Filter books based on search term
  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          return <Card key={index} title={book.title} author={book.authors[0]} formats={book.formats} />
        })}
      </GridContainer>
    </Container>
  );
};

export default Books;

