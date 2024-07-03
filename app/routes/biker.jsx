
import Banner from '~/components/Common/Banner';
import Categories from '~/components/Biker/Categories';
import Gears from '~/components/Biker/Gears';
import NewArrivalProduct from '~/components/Biker/NewArrivalProduct';
import Card from '~/components/Biker/Card';
import BoughtTogether from '~/components/Biker/BoughtTogether';
import YtLayout from '~/components/Common/YtLayout';
import Instagram from '~/components/Common/Instagram';

export const meta = () => {
  return [{ title: 'Bikenbiker | Biker' }];
};

export default function BikerPage() {
  return (
    <>
      <div className="biker">
        <Banner />
        <Categories />
        <Gears />
        <NewArrivalProduct />
        <Card />
        <BoughtTogether />
        <YtLayout />
        <Instagram />
      </div>
    </>
  );
}
