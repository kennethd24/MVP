import React from 'react';

const userFeedResult = (props) => {
  const { videoEntry, index } = props;
  const formatTime = new Date(videoEntry.createTime * 1000).toString().slice(0, 16);
  const formatLink = (
    <a href={videoEntry.webVideoUrl}>
      {videoEntry.webVideoUrl}
    </a>
  );

  return (
    <tr id={videoEntry.id}>
      <td>{index + 1}</td>
      <td>{videoEntry.text}</td>
      <td>{videoEntry.playCount.toLocaleString('en-US')}</td>
      <td>{videoEntry.diggCount.toLocaleString('en-US')}</td>
      <td>{videoEntry.commentCount.toLocaleString('en-US')}</td>
      <td>{formatTime}</td>
      <td>{formatLink}</td>
    </tr>
  );
};
export default userFeedResult;

