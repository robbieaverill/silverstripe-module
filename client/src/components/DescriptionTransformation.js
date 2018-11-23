import React from 'react';

const ddescriptionTransformation = (WrappedComponent) => (props) => {
  const passedProps = {
    ...props,
    extraClass: `${props.extraClass} text-field--transformed`,
  };

  return (
    <WrappedComponent {...passedProps} />
  );
};

export default ddescriptionTransformation;
