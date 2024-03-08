import { useEffect, useState } from "react";
import DrugStoreList from "../../components/DrugStoreList"
import { Medicine, Stores } from "../../interfaces/interfaces";
import { useGetStoresQuery } from "../../redux/features/ordersApi";
import MedicineList from "../../components/MedicineList";
import './styles.scss';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slice/cartSlice";

function Shop() {
  const [selectedStore, setSelectedStore] = useState<Stores | null>(null);
  const { data: stores, isLoading, isError } = useGetStoresQuery();

    const dispatch = useDispatch();

  const onAddToCart = (drug: Medicine) => {
    dispatch(addToCart(drug));
  };
  
  useEffect(() => {
    if (stores && stores.length > 0 && !selectedStore) {
      setSelectedStore(stores[0]);
    }
  }, [stores, selectedStore]);
  
  const onSelectStore = (store: Stores) => {
    setSelectedStore(store);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading stores</div>;

  return (
    <div className="shop">
      <DrugStoreList onSelectStore={onSelectStore} selectedStoreId={selectedStore?._id || null} />
      {selectedStore?.drugs && <MedicineList drugs={selectedStore.drugs} onAddToCart={onAddToCart} />}
    </div>
  );
}

export default Shop;