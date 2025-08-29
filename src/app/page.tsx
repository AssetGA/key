import AdvertisingBlock from "./components/AdvertisingBlock";
import ListOfProducts from "./components/common/ListOfProducts";
import ShopBlock from "./components/common/ShopBlock";
import FrontWindow from "./components/FrontWindow";
import Introducing from "./components/Introducing";
import Support from "./components/Support";
import Which from "./components/Which";

export default function Home() {
  return (
    <div className="w-full">
      <FrontWindow />
      <ListOfProducts />
      <Introducing />
      <AdvertisingBlock />
      <ShopBlock
        title="Купить умные замки"
        type="smart"
        imageUrl="/img/15.jpg"
      />
      <Which />
      <ShopBlock title="Купить замок" type="lock" imageUrl="/img/18.jpg" />
      <ShopBlock
        title="Купить круглые дверные ручки"
        type="handles"
        imageUrl="/img/17.jpg"
      />
      <ShopBlock
        title="Купить дверные ручки"
        type="handlesrounded"
        imageUrl="/img/16.jpg"
      />
      <ShopBlock title="Купить засовы" type="bolts" imageUrl="/img/27.jpg" />
      <Support />
    </div>
  );
}
