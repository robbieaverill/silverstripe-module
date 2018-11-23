import React from 'react';

const DescriptionTransformation = (WrappedComponent) => (props) => {
  const passedProps = {
    ...props,
    extraClass: `${props.extraClass} text-field--transformed`,
  };

  return (
    <WrappedComponent {...passedProps} />
  );
};

export default DescriptionTransformation;
