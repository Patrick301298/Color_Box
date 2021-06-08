import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

PostFiltersForm.propTypes = {
  onSubmit: PropTypes.func,
};
PostFiltersForm.defaultProps = {
  onSubmit: null,
};

function PostFiltersForm(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerm] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    setSearchTerm(e.target.value);
    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: e.target.value,
      };
      onSubmit(formValues);
    }, 300);
  }
  return (
    <div>
      <form>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        ></input>
      </form>
    </div>
  );
}

export default PostFiltersForm;
