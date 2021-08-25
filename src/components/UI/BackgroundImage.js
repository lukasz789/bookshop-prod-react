import booksImage from "../../assets/background_books_image.jpg";
import classes from "./BackgroundImage.module.css";

const BackgroundImage = () => {
  return (
    <div className={classes["main-image"]}>
      <img src={booksImage} alt="books" />
    </div>
  );
};

export default BackgroundImage;
