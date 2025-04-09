import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';

const JavaOnlineIDE = () => {
  const embedUrl = `https://www.jdoodle.com/embed/v1/abf2ac3f7cd65643`; // Replace with your actual Java Embed ID

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
      <div data-pym-src="${embedUrl}"></div>
      <script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"> </script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default JavaOnlineIDE;