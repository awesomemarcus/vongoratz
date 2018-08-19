import { isMobile } from 'react-device-detect';

export const platform = isMobile ? 'mobile' : 'web';