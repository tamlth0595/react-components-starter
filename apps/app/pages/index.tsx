import { Box } from '@material-ui/core';
import { useState } from 'react';
// import { SimpleText, SimpleTextDef } from '../components/SimpleText';
// import { SimpleTextModifier } from '../components/SimpleTextModifier';
import { SimpleBanner, SimpleBannerDef } from '../components/SimpleBanner';
import { SimpleBannerModifier } from '../components/SimpleBannerModifier';

export const Index = () => {
  const [bannerData, setBannerData] = useState<SimpleBannerDef>();
  return (
    <Box>
      <SimpleBannerModifier onDataChanged={(d) => setBannerData(d)} />
      <SimpleBanner data={bannerData} />
    </Box>
  );
};

export default Index;
