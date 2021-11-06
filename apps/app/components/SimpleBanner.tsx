import { Box, makeStyles } from '@material-ui/core';
import { FC } from 'react';
import { Device } from '../shared/Device';
import { PageElementProps } from '../shared/PageElementProps';

export interface SimpleBannerDef {
  text?: string;
  height?: number;
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "lightgreen",
    color: "red",
    fontSize: 30,
    fontWeight: 700,
    letterSpacing: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
}));

// do not remove PageElementProps to avoid collission later, we need this interface in the full app for integration
export const SimpleBanner: FC<
  { data: SimpleBannerDef; device?: Device } & PageElementProps
> = (props) => {
  const classes = useStyles();
  const className = `${props.className} ${classes.root}`;
  const height = props.data?.height ? props.data?.height : 50;
  return (
    <Box
      className={className}
      style={props.style}
      id={props.id}
      onMouseMove={props.onMouseMove}
      onDoubleClick={props.onDoubleClick}
      onClick={props.onClick}
      sx={{height}}
    >
      {props.data?.text}
    </Box>
  );
};
