const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */

const config = getDefaultConfig(__dirname);

module.exports = config;

module.exports = {
    ...config, // Keep the default configuration
    resolver: {
      ...config.resolver, // Keep the default resolver options
      assetExts: [...(config.resolver?.assetExts || []), 'json'], // Add 'json' to assetExts
      sourceExts: [...(config.resolver?.sourceExts || []), 'json'], // Optionally add 'json' to sourceExts as well
    },
  };