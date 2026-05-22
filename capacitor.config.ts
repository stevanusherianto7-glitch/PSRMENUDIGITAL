/** 
 * ⚠️ DILARANG KERAS UNTUK MENGUBAH ATAU MEMODIFIKASI FILE INI TANPA IZIN SENIOR ARCHITECT.
 * FILE INI BERISI CONFIG CAPACITOR UNTUK NATIVE ANDROID/IOS PAWON SALAM.
 * KESALAHAN MODIFIKASI DAPAT MENYEBABKAN FITUR HARDWARE (PRINTER/SCAN) TIDAK JALAN. ⚠️
 */
import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pawonsalam.pos',
  appName: 'Pawon Salam POS',
  webDir: 'dist',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    StatusBar: {
      overlaysWebView: false,
      backgroundColor: '#F7F1E6',
      style: 'DARK',
    },
    Keyboard: {
      resize: 'body',
      resizeOnFullScreen: true,
    },
    SplashScreen: {
      launchAutoHide: true,
      launchShowDuration: 2000,
      backgroundColor: '#F7F1E6',
      showSpinner: false,
    },
  },
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
