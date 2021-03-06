import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { merge } from 'webpack-merge';

import { productionConfig } from './config.prod';

const infoConfig = merge(productionConfig, {
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerHost: 'localhost',
      analyzerPort: 8888,
      defaultSizes: 'parsed',
      openAnalyzer: false,
      logLevel: 'info',
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ] as any,
  stats: {
    chunkGroups: true,
    chunks: true,
    chunkModules: false,
    chunkOrigins: true,
    errorDetails: true,
  },
  profile: true,
});

export default infoConfig;
