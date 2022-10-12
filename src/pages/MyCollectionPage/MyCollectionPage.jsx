import CollectionCard from '../../components/CollectionCard/CollectionCard';

export default function MyCollectionPage({ collection }) {
  const collectionList = collection.map((movie, idx) => 
  <CollectionCard 
  className="cov-img" 
  key={movie.id}
  id={movie.id}
  poster={movie.poster_path}
  title={movie.title || movie.name}
  date={movie.first_air_date || movie.release_date} />);
  return (
    <>
      <h1 className="page-title">My Collection</h1>
      <div className={collection.length > 0 ? "ColGrid" : ""}>
        {(collection.length > 0 ? collectionList
          :
          <h4>Collection is currently empty</h4>)}
        </div>
      <br />
      <br />
    </>
  );
}