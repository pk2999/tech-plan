import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';

export default function CircularProgressWithLabel(props) {
    return (
      <Box position="relative" display="inline-flex" sizeHeight="80px" sizeWidth="80px">
        <CircularProgress variant="static" {...props} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography variant="caption" component="div" color="textSecondary">{`${Math.round(
            props.value,
          )}%`}</Typography>
        </Box>
      </Box>
    );
  }
  CircularProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and static variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };