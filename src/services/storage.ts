class Storage {
  setItem = (key: string, value: any) => {
    window.localStorage.setItem(key, value);
  };

  getItem = (key: string) => {
    const encryptedValue = window.localStorage.getItem(key) || '';
    if (!encryptedValue) {
      return encryptedValue;
    }
    return encryptedValue;
  };
}

export default new Storage();
