import React from 'react';

const YtLayout = ({ ytVideos }) => {

    if (!ytVideos || ytVideos.length === 0) {
        return <div>Loading videos...</div>;
    }

    console.log("yid==>",ytVideos[0].id.videoId);

    return (
        <div className="yt-layout">
            <div className='yt-heading'>
                <div className="header-title">
                    <p>CONNECT, ENGAGED, RIDE!</p>
                    <h1>STAY CONNECTED WITH US</h1>
                    <h3>YOUTUBE FEED</h3>
                </div>
                <img className="header-thumbnail" src="/Images/Helmet.png" alt="" />
            </div>

            <div className="video-grid">
                <div className="main-video">
                    {/* <a href={`https://www.youtube.com/watch?v=${ytVideos[0].id.videoId}`}>
                        <img className="video-thumbnail" src={ytVideos[0].snippet.thumbnails.high.url} alt={ytVideos[0].snippet.title} />
                    </a> */}
                    
                    <div className="img1">
                        <iframe
                            src={`https://www.youtube.com/embed/${ytVideos[0].id.videoId}`}
                            title={ytVideos[0].snippet.title}                            
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="video-iframe"
                        ></iframe>
                    </div>

                </div>
                <div className="secondary-videos">
                    {ytVideos.slice(1, 3).map((item) => (
                        <div key={item.id.videoId} className="video-item">
                            {/* <a href={`https://www.youtube.com/watch?v=${item.id.videoId}`}>
                                <img className="video-thumbnail-small" src={item.snippet.thumbnails.high.url} alt={item.snippet.title} />
                            </a> */}

                            <div className="img">
                                <iframe
                                    src={`https://www.youtube.com/embed/${item.id.videoId}`}
                                    title={item.snippet.title}                                    
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="video-iframe-small"
                                ></iframe>
                            </div>
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
