import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";


const FeaturedProperties = () => {

  const {data, loading,error} = useFetch("/hotels?featured=true&limit=2");
  const images = [
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  ];

  return (
    <div className="fp">
      {loading ? ("Loading"
      ) : (
       <>

      {data.map((item)=>(
      <div className="fpItem" key={item._id}>
        <img
          src={item.photos[0]}
          alt="" 
          className="fpImg"
        />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Giá từ {item.cheapestPrice} VND</span>
        {item.rating && <div className="fpRating">
          <button>{item.rating}</button>
          <span>Tốt</span>
        </div>}
      </div>
      ))}
      </>
      )}
    </div>
  );
};

export default FeaturedProperties;
