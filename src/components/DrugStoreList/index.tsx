import { Stores } from '../../interfaces/interfaces';
import { useGetStoresQuery } from '../../redux/features/ordersApi'; 
import './styles.scss';

const DrugStoreList: React.FC<{
  onSelectStore: (store: Stores) => void;
  selectedStoreId: string | null;
}> = ({ onSelectStore, selectedStoreId }) => {
  const { data: stores, isLoading, isError } = useGetStoresQuery();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading stores</div>;

  return (
    <div className="drugstore-list">
      <ul>
        <h3 className="store-title">Shop:</h3>
        {stores?.map((store: Stores) => (
          <li
            key={store._id}
            onClick={() => onSelectStore(store)}
            className={store._id === selectedStoreId ? 'selected' : ''}
          >
            {store.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrugStoreList;

