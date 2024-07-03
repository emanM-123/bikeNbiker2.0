import { useRootLoaderData } from "~/root.jsx";
import Banner from '~/components/Common/Banner';
import Pulp from '~/components/Home/Pulp';
import CardGrid from '~/components/Home/CardGrid';
import YtLayout  from "~/components/Common/YtLayout";
import Gallery  from "~/components/Home/Gallery";
import AboutUs  from "~/components/Home/AboutUs";
import Instagram  from "~/components/Common/Instagram";
import Reviews  from "~/components/Home/Reviews";


/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{ title: 'Bikenbiker | Home' }];
};

export default function Homepage() {
  const data = useRootLoaderData();
  const ytVideos = data?.ytVideos || [];
  return (
    <>
      <div className="home">
        <Banner />
        <Pulp />  
        <CardGrid />
        <AboutUs />
        <Gallery />
        <YtLayout ytVideos={ytVideos} />   
        <Instagram feed={data?.instagramFeed || []}/> 
        <Reviews />   
      </div>
    </>
  );
}
