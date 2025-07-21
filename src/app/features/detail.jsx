import { useParams } from 'react-router';

export default function Details() {
  const { id } = useParams();

  // Fetch data from API then display it

  return (
    <div>
      <h1>This is a detail page about move {id}</h1>
      <p>This page provides detailed information about a specific film.</p>
    </div>
  );
}
