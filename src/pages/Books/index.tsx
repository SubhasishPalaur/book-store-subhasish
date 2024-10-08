


import  { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import { useNavigate, useParams } from "react-router-dom";
import backarrow from "../../assets/Back.svg"
import LottieAnimation from "../../components/LottieAnimation"

// Styled components for the Books layout
const Container = styled.div`
  padding: 20px 150px;
  background-color: #f8f7ff;
  height: 100vh;
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const Heading = styled.h1`
  color: #5E56E7;
  font-size: 2rem;
  font-family: Montserrat;
  display: flex;
  cursor: pointer;
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

  @media(max-width : 500px){
  gap: 0;
  grid-template-columns: repeat(auto-fill, minmax(128px, 1fr));
  }
`;

type Book = {
  title: string;
  authors: [{name: string}];
  formats: { 'image/jpeg': string };
};

let apiUrl : string 
if (process.env.NODE_ENV === 'development') {
  apiUrl = 'http://skunkworks.ignitesol.com:8000/books/'
} else if (process.env.NODE_ENV === 'production') {
  apiUrl = '/api/'
}
const Books = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [globalBooks, setGlobalBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const { page } = useParams();

  const getData = async (query = '') => {
    try {
      const url = query
        ? `${apiUrl}?search=${query}`
        : `${apiUrl}?topic=${page}`;
      
      const response = await fetch(url);
      const data = await response.json();
      setGlobalBooks(data.results);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    setLoading(true)
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm.trim() !== '') {
        getData(searchTerm);
      } else {
        getData();
      }
    }, 500); // 500ms debounce
  
    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, page]);

  const redirectToLastpage = () => {
    navigate('/')
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container>
      <Heading onClick={()=> redirectToLastpage()}>
        <BackArrow><img src={backarrow} alt="back arrow" style={{height: '16px', width: '16px'}}/></BackArrow>
        {page}
      </Heading>
      {/* <Suspense fallback={<LottieAnimation/>}> */}
      {loading ? <LottieAnimation/>:<>
        <SearchContainer>
          <SearchBar
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
          />
        </SearchContainer>
        <GridContainer>
          {globalBooks.map((book, index) => {
            return <Card key={index} title={book.title} authors={book.authors[0]} formats={book.formats} />
          })}
        </GridContainer>
      </>}
      {/* </Suspense> */}
    </Container>
  );
};

export default Books;

