interface PortfolioItemProps {
  image: string;
  alt: string;
  title: string;
  specs: string;
  price: string;
}

function PortfolioItem({ image, alt, title, specs, price }: PortfolioItemProps) {
  return (
    <div className="portfolio-item">
      <div className="portfolio-image">
        <img src={image} alt={alt} />
      </div>
      <h3>{title}</h3>
      <p>{specs}</p>
      <p className="price">買取価格: {price}</p>
    </div>
  );
}

export default PortfolioItem;
