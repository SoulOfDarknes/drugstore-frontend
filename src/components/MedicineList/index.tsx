import { Medicine, MedicineListProps } from "../../interfaces/interfaces";
import './styles.scss';

const MedicineList: React.FC<MedicineListProps> = ({ drugs, onAddToCart }) => {

  return (
    <div className="medicine">
      {drugs.map((drug: Medicine) => (
        <div key={drug._id} className="medicine-item">
          <img src={drug.imageUrl} alt={drug.name} className="medicine-image" />
          <div className="medicine-details">
            <span>{drug.name} - ${drug.price}</span>
            <div className="btn-wrap"><button onClick={() => onAddToCart(drug)}>Add to Cart</button></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MedicineList;