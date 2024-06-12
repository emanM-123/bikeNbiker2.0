import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{title: 'Bikenbiker | Youtube'}];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({context}) {
  const ytVideos = await fetch(
    'https://www.googleapis.com/youtube/v3/search?key=AIzaSyB7sm__GfyLIzJf-On9fnjqSCWgo3kqMGY&part=snippet&maxResults=50&channelId=UCCwtKebSwY_Q-0AA4O_m_uQ&order=date',
  );
  var items = await ytVideos.json();
  return defer({items});
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
    <>
      <div className="home">
        <YtVideos items={data.items.items} />
    
      </div>
      
      
     
    </>
  );
}


function YtVideos({items}) {
  if (!items) return null;
  return (
    <div class="relative">
      <h1>Youtube Feed</h1>
       <div class="grid grid-cols-3 md:grid-cols-4 gap-4 overflow-y-hidden p-4 mx-auto rounded-lg shadow-lg overflow-hidden relative after:content-[''] after:absolute after:inset-x-0 after:bottom-0 after:h-16 after:bg-gradient-to-b after:from-transparent after:to-white">
         
          {items.map((item, index) => {
      if(index == 0){
          return <div class="row-span-2 col-span-2"><a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}><img class="rounded-lg w-full" src={item.snippet.thumbnails.high.url} alt=""/><div key={item.snippet.title}>{item.snippet.title}</div></a></div>;
      }else{
         return <div ><a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}><img class="h-auto max-w-full rounded-lg" src={item.snippet.thumbnails.high.url} alt=""/><div key={item.snippet.title}>{item.snippet.title}</div></a></div>;
      }
        })}
         </div>
      <a href="/" class="absolute bottom-0"> See More</a>
      </div>

  );
}

