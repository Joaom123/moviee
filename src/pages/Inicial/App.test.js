import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from './App';
import Card from "../../components/Card";

/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/

test('titulo no card', () => {
    const filme = {
        "Title": "Captain Marvel",
        "Year": "2019",
        "imdbID": "tt4154664",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SX300.jpg"
    };

    const component = renderer.create(
        <Card filme = {filme}>
        </Card>
    );


});