export const sliceString = (string, length) => {
    if (string?.length > length) {
      return string.slice(0, length) + "...";
    }
    return string;
  };
  