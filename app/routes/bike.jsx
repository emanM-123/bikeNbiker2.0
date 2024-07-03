import Banner from '~/components/Common/Banner';
import Brand from '~/components/Bike/Brand';
import Card from '~/components/Bike/Card';
import NewArrivalProduct from '~/components/Bike/NewArrivalProduct';
import ProductCard from '~/components/Common/ProductCard';
import UniProduct from '~/components/Bike/UniProduct';
import YtLayout from '~/components/Common/YtLayout';
import Instagram from '~/components/Common/Instagram';
import RecentlyViewed from '~/components/Bike/RecentlyViewed';


export const meta = () => {
  return [{ title: 'Bikenbiker | Bike' }];
};


export default function BikePage() {
  return (
    <>
      <div className="bike">
        <Banner />
        <Brand />
        <Card />
        <NewArrivalProduct />
        <ProductCard />
        <UniProduct />
        <RecentlyViewed />
        <YtLayout />
        <Instagram />
      </div>
    </>
  );
}
