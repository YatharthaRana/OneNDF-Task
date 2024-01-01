import React from 'react';
import Alert from 'react-bootstrap/Alert';

function Error() {
  const variant = 'danger'; // Set the variant to 'danger'

  return (
    <Alert variant={variant}>
      Account already exists! Please try with different credentials.
    </Alert>
  );
}

export default Error;
