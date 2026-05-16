import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pawonsalam.pos',
  appName: 'Pawon Salam POS',
  webDir: 'dist',
  cordova: {
    preferences: {
      'BluetoothSerial': '0.4.7'
    },
    plugins: {
      'cordova-plugin-bluetooth-serial': {}
    }
  }
};

export default config;
