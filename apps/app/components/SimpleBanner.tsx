import { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { PageElementProps } from '../shared/PageElementProps';

interface SimpleBannerText {
  text: string;
}

interface ElementHeight {
  heihgt: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '1rem',
    backgroundColor: 'purple',
    color: 'white'
  },
}));


export const SimpleBanner: FC<
  { text: SimpleBannerText; height: ElementHeight } & PageElementProps
> = (props) => {
  const classes = useStyles();
  const className = `${props.className} ${classes.root}`;
  return (
    <Box className={className} style={{ height: `${props.height}px`}}>
      {props.text}
    </Box>
  );
};