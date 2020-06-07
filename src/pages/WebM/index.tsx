import React, { useEffect,  useState } from 'react';

import { ReactComponent  as RightArrow } from 'assets/icon/right-arrow.svg'
import { useApi } from 'api/useApi';
import { file } from 'api/types/endpoints';

import './style.css'

export const Board: React.FC = () => {
  const api = useApi();
  const [playList, setPlayList] = useState<file[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  useEffect(() => {
    const fetch = async () => {
      let thredIndex = 0;
      const threadList = await api?.getAllThreads();
      const threadsID = threadList?.threads.map(el => el.num);
      
      if (!threadsID) return;
      
      while (threadsID.length > thredIndex) {
        const postsByThreads = await api?.getAllPostsByThread(threadsID[thredIndex]);
        thredIndex += 1;
        if (!Array.isArray(postsByThreads)) continue;
        postsByThreads?.forEach(post => {
          if (!post.files.length) return;

          post.files.forEach((file: file) => {
            if (file.duration) {
              setPlayList((files: file[]) => [...files, file]);
            }
          })
        })
        await new Promise((resolve) => setTimeout(resolve, 700));
      }
    }
    fetch();
  }, [api])

  const nextFile = (shift: number) => {
    if (currentIndex + shift < 0) return
    setCurrentIndex(currentIndex + shift)
  }

  return (
    <div>
      {!!playList.length 
        ? (
        <div className="container">
          <video
            autoPlay
            controls
            height="500"
            src={'https://2ch.hk' + playList[currentIndex].path}
          />
          <span>{playList[currentIndex].name}</span>
          <span>{`NSFW: ${playList[currentIndex].nsfw}`}</span>
          <div className="arrowBlock">
            <RightArrow onClick={() => nextFile(-1)} className="leftArrow" />
            <RightArrow onClick={() => nextFile(1)} className="rightArrow" />
          </div>
        </div>
      ) : (
          <div className="preload">     
            Search WEBm... w8
          </div>
        )}
    </div>
  )
} 