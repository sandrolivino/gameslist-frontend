import "./card.css";
import Draggable from "react-draggable";

interface CardProps {
  title: string;
  year: number;
  imgUrl: string;
  shortDescription: string;
}

export function Card({ title, year, imgUrl, shortDescription }: CardProps) {
  return (
    <>
      <script src="script.js" defer></script>
      <Draggable>
        <div className="card">
          <ul className="sortable-list">
            <li className="item" draggable>
              <div className="details">
                <img src={imgUrl} />
                <span className="span">
                  {year} - {title}: {shortDescription}
                </span>
              </div>
              <i className="uil uil-draggabledots"></i>
            </li>
          </ul>
        </div>
      </Draggable>
    </>
  );
}
