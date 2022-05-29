export class LocalPersistence {
  static addItem(key: string, value: any) {
    console.log({ is: typeof value === "object", value });
    localStorage.setItem(
      key,
      typeof value === "object" ? JSON.stringify(value) : value
    );
  }

  static removeItem(key: string) {
    localStorage.removeItem(key);
  }

  static getItem(key: string) {
    const saved = localStorage.getItem(key);
    try {
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return saved;
    }
  }
}
