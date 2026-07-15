const stringUtils = (() => {
  const toTitleCase = (text: string) => {
    return text.replace(
      /\w\S*/g,
      (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase(),
    );
  };

  return { toTitleCase };
})();

export default stringUtils;
