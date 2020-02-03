export const isIOS = () => {
  return typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.platform);
};
export const isAndroid = () => {
  return typeof navigator !== 'undefined' && /(android)/i.test(navigator.userAgent);
};
