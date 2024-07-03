import React from 'react';

const YtLayout = ({ ytVideos }) => {
  if (!ytVideos || ytVideos.length === 0) {
    return <div>Loading videos...</div>;
  }

  return (
    <div className="yt-layout">
      <h1>Youtube Feed</h1>
      <div className="video-grid">
        <div className="main-video">
          <a href={`https://www.youtube.com/watch?v=${ytVideos[0].id.videoId}`}>
            <img className="video-thumbnail" src={ytVideos[0].snippet.thumbnails.high.url} alt={ytVideos[0].snippet.title} />
          </a>
        </div>
        <div className="secondary-videos">
          {ytVideos.slice(1, 3).map((item) => (
            <div key={item.id.videoId} className="video-item">
              <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
                <img className="video-thumbnail-small" src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
              </a>
              <div className="video-details">
                <div className="video-title">{item.snippet.title}</div>
                <div className="video-stats">Views: {item.statistics ? item.statistics.viewCount : 'N/A'}</div>
                <div className="video-stats">Likes: {item.statistics ? item.statistics.likeCount : 'N/A'}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YtLayout;
