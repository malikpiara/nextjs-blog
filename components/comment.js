import { parseISO, format } from 'date-fns';
import { useState } from 'react';
import commentStyles from './comment.module.css';
import utilStyles from '../styles/utils.module.css';
import ProfilePreview from '../components/profile_preview';

export default function Comment({ author, content }) {
	// const date = parseISO(dateString);

	const [showMore, setShowMore] = useState(false);

	function handleHover() {
		!showMore ? setShowMore(true) : setShowMore(false);
	}

	return (
		<>
			<div
				className={`${commentStyles.commentContainer} ${utilStyles.flex} ${utilStyles.gap20}`}
			>
				<div
					onMouseEnter={handleHover}
					onMouseLeave={handleHover}
					className={commentStyles.avatar}
				>
					{author.toUpperCase().slice(0, 1)}
				</div>
				<div>
					<div className={commentStyles.commentHead}>
						<>{author}</>
					</div>
					<div className={commentStyles.commentBody}>
						<p>{content}</p>
					</div>
					<div>
						{showMore ? (
							<>
								<ProfilePreview />
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	);
}
