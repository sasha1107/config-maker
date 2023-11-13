type JSONObject = Record<string, unknown>;

export default function joinJSON<T extends JSONObject, U extends JSONObject>(
  AData: T[],
  BData: U[],
  key: keyof T & keyof U
): (T & U)[] {
  const secondaryObj = Object.fromEntries(
    BData.map((item) => [item[key], item])
  );

  const result = AData.map((item) => ({
    ...item,
    ...(secondaryObj[item[key]] || {}),
  }));

  return result;
}
