
import { useLoaderData } from '@remix-run/react';
import Banner from '~/components/Banner';
import CardRow from '~/components/CardRow';
import CardGrid from '~/components/CardGrid';
import YtLayout  from "~/components/YtLayout";
/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{ title: 'Bikenbiker | Home' }];
};

export default function Homepage() {
  const data = useLoaderData();
  return (
    <>
      <div className="home">
        <Banner />
        <CardRow />
        <CardGrid />
        <YtLayout ytVideos={data.ytVideos} /> 
      </div>
    </>
  );
}
