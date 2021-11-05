import { Box } from '@material-ui/core';
import { useState } from 'react';
import { SimpleText, SimpleTextDef } from '../components/SimpleText';
import { SimpleTextModifier } from '../components/SimpleTextModifier';
import { SimpleBanner } from '../components/SimpleBanner';

export const Index = () => {
  const [data, setData] = useState<SimpleTextDef>();
  return (
    <Box>
      <SimpleBanner text="Banner text" height={32} />   
      <SimpleTextModifier onDataChanged={(d) => setData(d)} />
      <SimpleText data={data} />         
    </Box>
  );
};

export default Index;
