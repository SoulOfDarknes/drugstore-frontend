import { useDispatch, useSelector } from "react-redux";
import { Medicine, MedicineListProps } from "../../interfaces/interfaces";
import './styles.scss';
import { toggleFavorite } from "../../redux/slice/favoritesSlice";
import { useMemo, useState } from "react";
import starOutline from '../../assets/heart/heart.svg'; 
import starFilled from '../../assets/heart/heart-full.svg';
import { RootState } from "../../redux/store";

const MedicineList: React.FC<MedicineListProps> = ({ drugs, onAddToCart }) => {
  const dispatch = useDispatch();

  const favorites = useSelector((state: RootState) => state.favorites.favorites);

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const toggleSortOrder = () => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

  const sortedDrugs = useMemo(() => {
    const drugsWithFavorites = drugs.map(drug => ({
      ...drug,
      isFavorite: favorites.includes(drug._id),
    }));

    return drugsWithFavorites.sort((a, b) => {
      if (a.isFavorite && !b.isFavorite) return -1; 
      if (!a.isFavorite && b.isFavorite) return 1;
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    });
  }, [drugs, sortOrder, favorites]);

  return (
    <div className="medicine">
      <div className="sorting-controls">
        <button onClick={toggleSortOrder}>Sort by Price: {sortOrder.toUpperCase()}</button>
      </div>
      {sortedDrugs.map((drug: Medicine) => (
        <div key={drug._id} className={`medicine-item ${drug.isFavorite ? 'favorite' : ''}`}>
          <img src={drug.imageUrl} alt={drug.name} className="medicine-image" />
          <div className="medicine-details">
            <span>{drug.name} - ${drug.price}</span>
            <div className="btn-wrap">
              <button onClick={() => onAddToCart(drug)}>Add to Cart</button>
              <div className="favorite-toggle" onClick={() => dispatch(toggleFavorite(drug._id))}>
                <img src={drug.isFavorite ? starFilled : starOutline} alt="Favorite" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicineList;
