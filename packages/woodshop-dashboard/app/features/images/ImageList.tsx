import { Link } from "@remix-run/react";
import { GET_ImagesApiResponse } from "@woodshop/api";
import { TypographyCopy, TypographyHeading } from "@woodshop/components";
import clsx from "clsx";
import { FC } from "react";
import { NavLink } from "react-router-dom";

export const ImageList: FC<{ images: GET_ImagesApiResponse }> = ({
  images,
}) => {
  return (
    <div className={clsx("JqEdN", "list")}>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <NavLink to={`/images/${image.id}`}>
              <img src={image.url} alt={image.title} />
            </NavLink>
            <TypographyCopy
              cxVariant="body1"
              cxNode="div"
              style={{
                fontWeight: "bold",
                marginTop: ".5rem",
              }}
            >
              {image.title}
            </TypographyCopy>
          </li>
        ))}
      </ul>
    </div>
  );
};
