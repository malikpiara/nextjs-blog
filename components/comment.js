import { parseISO, format } from 'date-fns';
import commentStyles from './comment.module.css';
import utilStyles from '../styles/utils.module.css';
import { useState, useEffect } from 'react';

export default function Comment({author, content}) {
  // const date = parseISO(dateString);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    fetch('/api/comments')
      .then((res) => res.json())
      .then(() => {
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  //if (!listOfComments) return <p>No comments.</p>

  return (
    <>
    <div className={`${commentStyles.commentContainer} ${utilStyles.flex} ${utilStyles.gap20}`}>
      <div className={commentStyles.avatar}>{author.toUpperCase().slice(0, 1)}</div>
      <div>
        <div className={commentStyles.commentHead}>
            <>{author}</>
        </div>
        <div className={commentStyles.commentBody}>
            <p>{content}</p>
        </div>
        </div>
    </div>
    </>
  );
}