import { Box, debounce, makeStyles, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { SimpleBannerDef } from './SimpleBanner';

const useStyles = makeStyles((theme) => ({
  editor: {
    height: 'auto',
    resize: 'none',
    border: 'none',
  },
}));

const initialSimpleBannerDef: SimpleBannerDef = {
  text: '',
  height: 50,
};

export const SimpleBannerModifier = (props: {
  onDataChanged: (d: SimpleBannerDef) => void;
}) => {
  const classes = useStyles();
  const [data, setData] = useState<SimpleBannerDef>(() => ({
    ...initialSimpleBannerDef,
  }));

  const updateProperty = (key: keyof SimpleBannerDef, value: any) => {
    setData((prev) => {
      const updated = {
        ...prev,
        [key]: value,
      };
      props.onDataChanged(updated);
      return updated;
    });
  };

  const updateText = debounce((v: string) => updateProperty('text', v), 300);
  const updateHeight = debounce((v: number) => updateProperty('height', v), 300);

  useEffect(() => {
    props.onDataChanged(data);
    return;
  }, [data]);

  return (
    <Box padding="1rem">
      <TextField
        style={{ width: '70%' }}
        className={`${classes.editor}`}
        variant="outlined"
        label="Text"
        defaultValue={data.text || ''}
        onChange={(e) => updateText(e.target.value)}
      />
      <TextField
        style={{ width: '30%' }}
        className={`${classes.editor}`}
        variant="outlined"
        type='number'
        label="Height"
        defaultValue={data.height || ''}
        onChange={(e) => updateHeight(parseInt(e.target.value))}
      />
    </Box>
  );
};
