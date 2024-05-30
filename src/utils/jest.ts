export const isJestInstalled = () => {
  try {
    require.resolve("jest");
    return true;
  } catch {
    return false;
  }
};
