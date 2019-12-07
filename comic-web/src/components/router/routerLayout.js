import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

const RouteLayout = props => {
  const {user, layout: Layout, component: Component, ...rest } = props;
  console.log(props);

  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout user={user}>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

RouteLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string
};

export default RouteLayout;
