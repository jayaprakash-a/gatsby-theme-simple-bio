// eslint-disable-next-line no-unused-vars
import React from "react";
import PropTypes from "prop-types";

import profileImage from "../../../../content/assets/profile.svg";
import {useOptions} from "gatsby-theme-simple-bio/src/hooks/useOptions";

FigureBio.propTypes = {
  image: PropTypes.any.isRequired,
  caption: PropTypes.any,
};

FigureBio.defaultProps = {
  caption: <div></div>,
};

/**
 * @param {object} props
 * @return {JSX}
 */
function FigureBio({image, caption}) {
  const options = useOptions();
  const borderRadius = options.rounded === false ? "0%" : "50%";
  console.log(options.rounded);
  return (
    <>
      {/* TODO: Fix this for rounded option */}
      <img
        src={profileImage}
        alt={"Profile image of John Doe"}
        style={{
          color: "red",
          borderRadius: `${borderRadius}`,
        }}
      />
    </>
  );
}

export default FigureBio;
