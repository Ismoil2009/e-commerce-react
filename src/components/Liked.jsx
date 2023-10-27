export default function Liked({ basket }) {
  return (
    <>
      <h2 className="all">Понравившиеся</h2>
      <div className="ttls">
        {basket.map((item) => {
          const { id, title } = item;
          return (
            <div key={id}>
              <h2 className="ttl">{title}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}
