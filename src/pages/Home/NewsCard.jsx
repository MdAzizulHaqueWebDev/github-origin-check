/** @format */

import { FaBookmark, FaEye, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewsCard = ({ news }) => {
	const {_id, title, author, image_url, details ,total_view} = news;
	const { name, published_date, img } = author;
	return (
		<div>
			<div className="rounded-md shadow-md  dark:bg-gray-50 dark:text-gray-800">
				<div className="flex items-center justify-between bg-gray-200 p-3">
					<div className="flex items-center space-x-2">
						<img
							src={img}
							alt=""
							className="object-cover object-center w-8 h-8 rounded-full shadow-sm dark:bg-gray-500 dark:border-gray-300"
						/>
						<div className="-space-y-1">
							<h2 className="text-sm font-semibold leading-none">{name}</h2>
							<span className="inline-block text-xs leading-none dark:text-gray-600">
								{published_date}{" "}
							</span>
						</div>
					</div>
					<div className="flex gap-3">
						<FaBookmark />
						<FaShareAlt />
					</div>
				</div>
				<h1 className="text-xl font-bold p-1">{title}</h1>

				<img
					src={image_url}
					alt="img"
					className="object-cover object-center w-full h-72 dark:bg-gray-500"
				/>
              {
              details.length > 200 ? <p> {details.slice(0,200)}.... <Link to={`/newsDetails/${_id}`} className="text-bold text-orange-300 block link">Read more</Link> </p> : details
              }
                <hr />
				<div className="p-3 flex justify-between items-center">

						<div className="rating">
							<input
								type="radio"
								name="rating-2"
								className="mask mask-star-2 bg-orange-400"
							/>
							<input
								type="radio"
								name="rating-2"
								className="mask mask-star-2 bg-orange-400"
								checked
							/>
							<input
								type="radio"
								name="rating-2"
								className="mask mask-star-2 bg-orange-400"
							/>
							<input
								type="radio"
								name="rating-2"
								className="mask mask-star-2 bg-orange-400"
							/>
							<input
								type="radio"
								name="rating-2"
								className="mask mask-star-2 bg-orange-400"
							/>
						</div>
                        <div className="flex gap-2 items-center">
                            <FaEye/> {total_view}
                        </div>
					
				</div>
			</div>
		</div>
	);
};

export default NewsCard;
