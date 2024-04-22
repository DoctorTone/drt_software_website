const getDeviceStatus = () => {
  // See if mobile
  try {
    document.createEvent("TouchEvent");
    return true;
  } catch (error) {
    // Must be desktop
    return false;
  }
};

const getCameraPosition = (windowWidth) => {
  const SMALL = 576;
  const MEDIUM = 768;
  const LARGE = 992;

  if (windowWidth >= LARGE) {
    return [0, 1, 1.5];
  }

  if (windowWidth >= MEDIUM) {
    return [0, 1, 1.5];
  }

  // Must be small
  return [0, 1, 3.5];
};

export { getDeviceStatus, getCameraPosition };
