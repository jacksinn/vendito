export const Vendito = (shopifyApiVersion: string) => {
  /**
   * Shopify Versions:
   *  - '2022-07'
   *  - '2022-04'
   *  - '2022-01'
   *  - '2021-10'
   *  - '2021-07'
   *
   * Maybe Handle:
   *  - 'unstable'
   *  - 'release candidate'
   *  - 'latest'
   */
  if (shopifyApiVersion !== '') {
    return 'supported';
  }
  return 'latest';
};
